const express = require("express")
const router = express.Router();
const Choir = require("../models/choir.js")
const User = require("../models/user.js");
const Music = require("../models/music.js");

router.post("/create_choir", (req,res,next)=>{
    Choir.find({email: req.body.name})
    .then((choir)=>{
        if(choir.length>0) res.status(403).json({message: `A choir with the name "${choir.name}" already exists`})
        else {
            Choir.create({
                name: req.body.name,
                //conductor: req.session.user._id,
                //singers: req.body.singers, // an array or userIDs
                //choir_type: req.body.choir_type,
                city: req.body.city,
                about: req.body.about,
                repertoire: []
            })
            .then(()=> {
            res.status(200).json({message: "Choir created"})
            })
            .catch((err)=> {
            res.status(500).json({message: err})
            })
        }
    })
})



module.exports = router;