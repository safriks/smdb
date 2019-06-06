const express = require("express")
const router = express.Router();

const Music = require("../models/music.js");
const Composer = require("../models/composer.js");

router.get('/all_music', (req, res) => {
    Music.find({}).
        populate("composer").
        populate("arrangement").
        exec((err,result)=>{  
            if (err) res.send("error fetching all music. err msg: "+err);
            if (!err) {
                res.json(result)
            };
        })
})
router.get('/all_composers', (req, res) => {

    Composer.find({}).
        populate("works").
        populate("arrangements").
        exec((err,result)=>{
            if (err) res.send("error fetching composers. err msg: "+err);
            if (!err) {
                res.json(result)
            };
        })
})

router.get('/composer_list', (req, res) => {
    
    Composer.find({}).
        exec((err,result)=>{
            if (err) res.send("error fetching composers. err msg: "+err);
            if (!err) {
                res.json(result)
            };
        })
})

module.exports = router;
