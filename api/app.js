const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require('path')
require("dotenv").config({ path: __dirname + "/../.env"})

const Music = require("./models/music.js");
const Composer = require("./models/composer.js");

// const cors = require("cors")
// app.use(cors())

const allRoute = require("./routes/all.js");
const searchRoute = require("./routes/search.js");
const uploadRoute = require("./routes/upload.js");

app.use("/", allRoute);
app.use("/", searchRoute);
app.use("/", uploadRoute);
app.use(express.static(path.join(__dirname, 'public')))


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, (err)=> {
    if(!err)console.log("connected to sheet music db")
    else console.log("ERROR connecting to db:", err)
})


const port = process.env.PORT;
app.listen(port, ()=> {
    console.log(`s-m-d-b API live! listeneing on port ${port}.....`)
})
