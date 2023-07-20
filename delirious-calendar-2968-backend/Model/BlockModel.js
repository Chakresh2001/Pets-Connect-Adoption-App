const mongoose = require('mongoose');


const BlockSchema = mongoose.Schema({

    email:{type:String}

}, {versionKey:false})

const BlockModel = mongoose.model("Block", BlockSchema)

module.exports = BlockModel