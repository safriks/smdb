const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config({ path: __dirname + "/../.env"})

const Music = require("./models/music.js");
const Composer = require("./models/composer.js");


// const cors = require("cors")
// app.use(cors())

console.log(process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, (err)=> {
    if(!err)console.log("connected to sheet music db")
    else console.log("ERROR connecting to db:", err)
})


app.get('/all_music', (req, res) => {
    Music.find({}, (err,result)=>{  // OUT OF ORDER !!!
        if (err) res.send("error fetching all music. err msg: "+err);
        if (!err) {
            console.log(result)
            res.json(result)
        };
    })
})
app.get('/all_composers', (req, res) => {
    Composer.find({}, (err,result)=>{
        if (err) res.send("error fetching composers. err msg: "+err);
        if (!err) {
            console.log(result)
            res.json(result)
        };
    })
})


const port = process.env.PORT;
app.listen(port, ()=> {
    console.log(`s-m-d-b API live! listeneing on port ${port}.....`)
})
