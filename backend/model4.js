const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//const collection=mongoose.Collection;

const tripcreate = new Schema({
  Destination:{
    type: String
  },

  Days:{
    type:Number
  },
  People:{
    type:Number
  },
    
   Budget:{
    type:Number
   },

   Date:{
    type:String
   }
       

});





module.exports =mongoose.model('trip1',tripcreate);


