const router = require("express").Router();
const Product = require("../model/product.model");
const fs = require("fs")
const uploadFile = require("../middlewares/uploadfile")


// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
const readline = require("readline")
const { google } = require("googleapis")

// service account key file from Google Cloud console.
const KEYFILEPATH = 'web10-auth-331504-d5cdb12fa135.json';

// Request full drive access.
const SCOPES = ['https://www.googleapis.com/auth/drive'];


// Request full drive scope and profile scope, giving full access to google drive as well as the users basic profile information.
// const SCOPES = ['https://www.googleapis.com/auth/drive', 'profile'];

// Create a service account initialize with the service account key file and scope needed
const auth = new google.auth.GoogleAuth({
  keyFile: KEYFILEPATH,
  scopes: SCOPES
});

{/* <img src="https://drive.google.com/uc?export=view&id=XXX"> */ }

async function createAndUploadFile(name) {
  const driveService = google.drive({ version: 'v3', auth });

  let fileMetadata = {
    'name': name,
    parents: ["1UPFckEL2bnj1wGJ0SaNGDoQHI-9SYNA7"]
  };
  let media = {
    mimeType: 'image/jpeg',
    body: fs.createReadStream(`../backend/src/uploads/${name}`)
  };

  let response = await driveService.files.create({
    resource: fileMetadata,
    media: media,
    fields: 'id'
  });

  // console.log("response", response)

  switch (response.status) {
    case 200:
      let file = response.result;
      return response.data.id
    default:
      console.error('Error creating the file, ' + response.errors);
      break;
  }
}
// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

// create a product
router.post(
  "/",
  uploadFile.single("file"),
  async function (req, res) {
    try {
      let id = await createAndUploadFile(req.file.filename)
      const product = await Product.create({
        name: req.body.name,
        Description: req.body.desc,
        userId: req.body.userId || "123",
        votes: req.body.votes || 710,
        comment: req.body.comment || 45,
        monetization: req.body.monetize,
        Category: req.body.category,
        link: req.body.link,
        img: id,
      });
      fs.unlinkSync(req.file.path)
      return res.status(200).send("success");

      // console.log(req.file.path)
      // let id = await createAndUploadFile(req.file.filename)
      // console.log("file created : > ", id)
      // return res.send("success")
    } catch (err) {
      console.log(err.message)
      fs.unlinkSync(req.file.path)
      return res.status(400).send(err.message)

    }

  }
);


// get a product
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    return res.status(200).send(product)
  } catch (err) {
    return res.status(500).send(err.message)
  }
});

//get a product

router.get("/", async (req, res) => {
  try {
    const product = await Product.find().lean().exec();
    return res.status(200).send(product)
  } catch (err) {
    return res.status(500).send(err.message)
  }
});

//vote a product
router.put("/:id/vote", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    if (!product.likes.includes(req.body.userId)) {
      await product.updateOne({ $push: { votes: req.body.userId } })
      res.status(200).send("the post has been voted")
    } else {
      await product.updateOne({ $pull: { votes: req.body.userId } })
      res.status(200).send("the post been unvoted")
    }
  } catch (err) {
    res.status(500).send(err.message)
  }

});

module.exports = router;
