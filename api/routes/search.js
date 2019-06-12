const express = require("express")
const router = express.Router();

const Music = require("../models/music.js");
const Composer = require("../models/composer.js");
const User = require("../models/user.js");

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

router.get("/id/:id", (req,res)=>{
    // const searchQuery = req.query.q;
    // const regExSearch = new RegExp(`.${searchQuery}.`);
    debugger
    Music.find({_id : {$eq : req.params.id }})
    .populate("composer")
    .populate("arrangement")
    .populate("uploader")
    .exec((err,result)=>{  
        if (err) res.send("error searching music. err msg: "+err);
        if (!err) {
            debugger
            res.json(result)
        };
    })  
})

module.exports = router;