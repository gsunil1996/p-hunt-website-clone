const router = require("express").Router();
const Product = require("../models/product.model");
const upload = require("../middlewares/fileupload");

//create a product
router.post(
    "/",
    upload.single("productImage"),
    async function (req, res) {
      const product = await Product.create({
        name: req.body.name,
        Description: req.body.Description,
        userId: req.body.userId,
        votes: req.body.votes,
        comment: req.body.comment,
        monetization: req.body.monetization,
        Category: req.body.Category,
        link: req.body.link,
        img: req.file.path,
      });
      return res.status(200).send(product);
    }
  );

  // get a product
router.get("/:id", async(req,res)=>{
    try{
      const product = await Product.findById(req.params.id);
     return res.status(200).send(product)
    } catch(err){
       return res.status(500).send(err.message)
    }
});

  //vote a product
  router.put("/:id/vote", async(req,res)=>{
    try{
        const product = await Product.findById(req.params.id)
        if(!product.likes.includes(req.body.userId)){
            await product.updateOne({$push:{votes:req.body.userId}})
            res.status(200).send("the post has been voted")
        } else{
            await product.updateOne({$pull:{votes:req.body.userId}})
            res.status(200).send("the post been unvoted")
        }
    } catch(err){
        res.status(500).send(err.message)
    }
    
});

module.exports = router;
