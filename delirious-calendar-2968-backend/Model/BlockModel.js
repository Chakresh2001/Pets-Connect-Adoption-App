const mongoose = require('mongoose');


const BlockSchema = mongoose.Schema({

    id:{type:String}

}, {versionKey:false})

const BlockModel = mongoose.model("Block", BlockSchema)

module.exports = BlockModel