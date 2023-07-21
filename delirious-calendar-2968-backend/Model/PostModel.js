const mongoose = require('mongoose');


const postSchema = mongoose.Schema({

    pet_name:{type:String},
    pet_breed:{type:String},
    pet_age:{type:Number},
    pet_location:{type:String},
    pet_image:{type:String},
    pet_price:{type:Number},

    userID:{type:String},
    userName:{type:String},
    user_location:{type:String},
    // status:{type:Boolean},
    // time:{type:String}

}, {versionKey:false})

const postModel = mongoose.model("post", postSchema)

module.exports = postModel