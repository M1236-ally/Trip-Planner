const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let userinfo = new Schema({
  name: {
    type: String
  },
  emailID: {
    type: String
  },

  password:{
    type: Number
  }
});



module.exports = mongoose.model("USERinfo", userinfo);

