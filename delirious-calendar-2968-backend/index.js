const express = require('express');
const connectToServer = require('./Config/db');
const userRoute = require('./Routes/userRoute');
require('dotenv').config();


const app = express()

app.use(express.json())

app.use("/user", userRoute)




// DO NOT MAKE CHANGES DOWN HERE

app.listen(process.env.LOCAL_PORT, connectToServer(), ()=>{

    console.log(`connect to port ${process.env.LOCAL_PORT}`)

})