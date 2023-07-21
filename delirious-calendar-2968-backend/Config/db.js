

// THIS FILE IS CONNECT THE MONGODB TO OUR LOCAL SYSTEM. DO NOT MAKE ANY CHANGES


const mongoose = require('mongoose');
require('dotenv').config();



const connectToServer = async()=>{

    await mongoose.connect("mongodb+srv://chakresh1234:chakresh1234@cluster0.cqppmvp.mongodb.net/PetsConnect?retryWrites=true&w=majority")

    console.log("server is running")

}

module.exports = connectToServer