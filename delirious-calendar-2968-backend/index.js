const express = require('express');
const connectToServer = require('./Config/db');
const userRoute = require('./Routes/userRoute');
require('dotenv').config();
const cors = require("cors");
const adminRoute = require('./Routes/adminRoute');

const app = express()

app.use(cors())

app.use(express.json())

app.use("/user", userRoute)

app.use("/admin", adminRoute)




// DO NOT MAKE CHANGES DOWN HERE

app.listen(process.env.LOCAL_PORT, connectToServer(), ()=>{

    console.log(`connect to port ${process.env.LOCAL_PORT}`)

})