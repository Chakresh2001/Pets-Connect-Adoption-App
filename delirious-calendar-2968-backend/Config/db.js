

// THIS FILE IS CONNECT THE MONGODB TO OUR LOCAL SYSTEM. DO NOT MAKE ANY CHANGES


const mongoose = require('mongoose');
require('dotenv').config();



const connectToServer = async()=>{

    await mongoose.connect(process.env.MONGODB_LINK)

    console.log("server is running")

}

module.exports = connectToServer