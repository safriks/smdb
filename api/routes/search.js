const express = require("express")
const router = express.Router();

const Music = require("../models/music.js");
const Composer = require("../models/composer.js");

router.get("/search", (req,res)=>{
    // const searchQuery = req.query.q;
    // const regExSearch = new RegExp(`.${searchQuery}.`);
    Music.find({title : {$regex : req.query.q, $options: 'i' }}).
    populate("composer").
    populate("arrangement")
    .exec((err,result)=>{  
        if (err) res.send("error searching music. err msg: "+err);
        if (!err) {
            res.json(result)
        };
    })
})

module.exports = router;


    // const title = req.query.title
    // const composer = req.query.composer
    // const arrangement_author = req.query.arrangement_author
    // const year = req.query.year
    // const genre = req.query.genre
    // const voices = req.query.voices
    // const tags = req.query.tags