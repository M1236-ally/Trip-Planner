const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let destin = new Schema({
  Region:{
    type: String
  },

  Mood:{
    type:String
  },
  Airport:{
    type:String
  },
    
   Place:{
    type:String
   },

   DestImg:{
    type:String
   },

   ImgDesc:{
    type:String
   }



});

module.exports=mongoose.model('destins',destin);