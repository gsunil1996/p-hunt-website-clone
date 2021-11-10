const router = require("express").Router();
const Product = require("../models/product.model");

//create a product
router.post("/",async (req,res)=>{
    const newProduct = new Product(req.body)
    try{
      const saveProduct = await newProduct.save();
      res.status(200).send(saveProduct)
    } catch(err){
        res.status(500).send(err.message);
    }
  });

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
