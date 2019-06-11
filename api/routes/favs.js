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


    const musicID = req.body.sheetId;
    const userId = req.body.currentUserId

    Promise.all([
        Music.updateOne(
            { _id: musicID },
            { $push: {favs: userId}} // change req.body.user_id to req.session.user._id
        ),
        User.updateOne(
            { _id: userId }, // change req.body.user_id to req.session.user._id
            { $push: {favs: musicID}}
        )
    ])
    .then((results)=>{
        res.status(200).json({message: `Favourited!(hopefully)`})
    })
    .catch(err=> {
        console.log("could not add favourite, err msg:",err)
        res.status(500).json({message: err})
    })
})

router.post('/remove_fav', (req,res) => {
    const musicID = req.body.sheetId;
    const userId = req.body.currentUserId

    Promise.all([
        Music.updateOne(
            { _id: musicID },
            { $pull: {favs: userId}} // change req.body.user_id to req.session.user._id
        ),
        User.updateOne(
            { _id: userId }, // change req.body.user_id to req.session.user._id
            { $pull: {favs: musicID}}
        )
    ])
    .then((results)=>{
        res.status(200).json({message: `Fav removed!(hopefully)`})
    })
    .catch(err=> {
        console.log("could not remove, err msg:",err)
        res.status(500).json({message: err})
    })
})


module.exports = router;
