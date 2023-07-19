const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({

    name:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    location:{type:String, required:true},
    gender:{type:String, required:true},

}, {versionKey:false})

const UserModel = mongoose.model("User", UserSchema)

module.exports = UserModel