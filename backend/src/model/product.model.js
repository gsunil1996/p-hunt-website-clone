const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        userId:{
            type:String,
            required:true
        },
        Category:{
            type:String,
            required:true
        },
        Description:{
            type:String,
            max:500
        },
        img:{
            type:String,
            required:true,
  
        },
        name:{
            type:String,
            required:true
        },
        comment :{
            type:Number,
            default:0
        },
        votes:{
            type:Number,
            default:0
        },
        monetization:{
            type:String,
            required:true
        },
        link:{
            type:String,
            required:false
        },
        date:{
            type:String,
            default:"13/11/21"
        }
    },
    {timestamps:true}
    
  );
  
  module.exports = mongoose.model("product", ProductSchema);
  