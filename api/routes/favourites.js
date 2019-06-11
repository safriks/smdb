const express = require("express")
const router = express.Router();

const Music = require("../models/music.js");
const Composer = require("../models/composer.js");
const Choir = require("../models/choir.js")
const User = require("../models/user");
const values = require("../../smdb-client/src/values")

router.get('/favourites', (req,res) => {

})

router.post('/add_fav', (req,res) => {
    
})

module.exports = router;
