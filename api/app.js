const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require('path')
require("dotenv").config({ path: __dirname + "/../.env"})
var session = require('express-session')
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const MongoStore = require('connect-mongo')(session);

const Music = require("./models/music.js");
const Composer = require("./models/composer.js");

const cors = require("cors")
app.use(cors({
    origin: ["http://localhost:3000", "localhost:3000"],
    credentials: true
}))

const allRoute = require("./routes/all.js");
const searchRoute = require("./routes/search.js");
const uploadRoute = require("./routes/upload.js");
const usersRoute = require("./routes/users.js");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser())

app.use(
    session({
      secret: "jeff9164",
      cookie: { maxAge: 60000 },
      store: new MongoStore({
        mongooseConnection: mongoose.connection,
        ttl: 24 * 60 * 60 // 1 day
      })
    })
);

app.use("/", allRoute);
app.use("/", searchRoute);
app.use("/", uploadRoute);
app.use("/", usersRoute);
app.use(express.static(path.join(__dirname, 'public')))

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, (err)=> {
    if(!err)console.log("connected to sheet music db")
    else console.log("ERROR connecting to db:", err)
})


const port = process.env.PORT;
app.listen(port, ()=> {
    console.log(`s-m-d-b API live! listeneing on port ${port}.....`)
})
