const router = require("express").Router();
const Product = require("../model/product.model");
const fs = require("fs")

const img_arr = [
"https://ph-files.imgix.net/035ad571-b6c1-433d-a784-1ce9b672d241.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=1",
"https://ph-files.imgix.net/849a05d9-5bf1-4a51-87b0-d295c59e3294.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=1",
"https://ph-files.imgix.net/51887620-cd92-4c8e-90ed-35d257433e77.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=1",
"https://ph-files.imgix.net/035ad571-b6c1-433d-a784-1ce9b672d241.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=1",
"https://ph-files.imgix.net/1ced46a6-d8f0-4fd9-aac4-1aca1e665698.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=1",
"https://ph-files.imgix.net/a1c2a2dd-92d5-4f09-a25d-1c9dea179051.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=1",
"https://ph-files.imgix.net/faf67828-51d7-49e7-ba5e-98ddaaea86c3.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=max&dpr=1",
"https://ph-files.imgix.net/9ff86c5a-99c0-4688-ad57-e52d12187529.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=1",
"https://ph-files.imgix.net/2fa15857-1e27-4351-aed1-fad3d5639c01.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=1",
"https://ph-files.imgix.net/6c40eaf3-6c37-4f73-9007-df30de9a956f.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=1",
"https://ph-files.imgix.net/3ff29b69-da1c-40e7-a280-d71ad5f12764.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=1",

]
// create a product
router.post(
    "/",
    async function (req, res) {
      try{
          const product = await Product.create({
          name: req.body.name,
          Description: req.body.description,
          userId: req.body.userId || "123",
          votes: req.body.votes || 710,
          comment: req.body.comment || 45,
          monetization: req.body.monetize,
          Category: req.body.category,
          link: req.body.link,
          img: img_arr[Math.floor(Math.random() * 3)],
        });
        return res.status(200).send(product);
      } catch(err){
        console.log(err.message)

        return res.status(400).send(err.message)
        
      }
      
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

//get a product

router.get("/", async(req,res)=>{
  try{
    const product = await Product.find().lean().exec();
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
