const express = require("express")
const router = express.Router();

const Music = require("../models/music.js");
const Composer = require("../models/composer.js");
const Choir = require("../models/choir.js")
const User = require("../models/user");
const values = require("../../smdb-client/src/values")

router.get('/favourites', (req,res) => {
    res.status("you can get favourites from the user in the session")
})

router.post('/add_fav', (req,res) => {
    debugger
    const userUpdRes = {}
    Music.updateOne(
        { _id: req.body._id },
        { $push: {favs: req.body.user_id}} // change req.body.user_id to req.session.user._id
    );
    User.updateOne(
        { _id: req.body.user_id }, // change req.body.user_id to req.session.user._id
        { $push: {favs: req.body._id}}
    )
    .then(()=>{
        debugger
        res.status(200).json({message: "Favourited!"})
    })
    .catch(err=>console.log("could not add favourite, err msg:",err))
})

router.post('/remove_fav', (req,res) => {
    debugger
    Music.updateOne(
        { _id: req.body._id },
        { $pull: {favs: req.body.user_id}} // change req.body.user_id to req.session.user._id
    ) 
    User.updateOne(
        { _id: req.body.user_id }, // change req.body.user_id to req.session.user._id
        { $pull: {favs: req.body._id}}
    )
    .then(()=>{
        debugger
        res.status(200).json({message: "Fav mark removed!"})
    })
    .catch(err=>console.log("could not add favourite, err msg:",err))
})

module.exports = router;
