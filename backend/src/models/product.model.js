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
  
        },
        comment :{
            type:Array,
            default:[]
        },
        votes:{
            type:Array,
            default:[]
        },
        monetization:{
            type:String,
            required:true
        },
        link:{
            type:String,
            required:false
        },
    },
    {timestamps:true}
    
  );
  
  module.exports = mongoose.model("product", ProductSchema);
  