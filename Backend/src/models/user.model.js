const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   username:{
      type:String,
      required:[true, "Username already taken"],
      unique:true
   },
   email:{
      type:String,
      required:[true, "Account already exist with this email address "],
      unique:true
   },
   password:{
      type:String,
      required:[true]

   }
})

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;