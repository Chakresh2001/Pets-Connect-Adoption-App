const express = require('express');
const connectToServer = require('./Config/db');
const userRoute = require('./Routes/userRoute');
require('dotenv').config();
const cors = require("cors");
const adminRoute = require('./Routes/adminRoute');
const dogsRoute = require('./Routes/DogsRoute');
const catsRoute = require('./Routes/CatsRoute');
const { postRouter } = require('./Routes/postRoute');

const app = express()

app.use(cors())  // DO NOT TOUCH THIS CODE

app.use(express.json())

app.use("/user", userRoute)

app.use("/admin", adminRoute)

app.use("/dogs", dogsRoute)

app.use("/cats", catsRoute)

app.use("/post",postRouter)



// DO NOT MAKE CHANGES DOWN HERE

// app.listen(process.env.LOCAL_PORT, connectToServer(), ()=>{

//     console.log(`connect to port ${process.env.LOCAL_PORT}`)

// })
app.listen(8080, connectToServer(), ()=>{

    console.log(`connect to port 8080`)

})