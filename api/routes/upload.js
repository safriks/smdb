const express = require("express")
const router = express.Router();

var multer  = require('multer')
var upload = multer({ dest: '../../library' })


const Music = require("../models/music.js");
const Composer = require("../models/composer.js");

router.post("/upload", upload.single("sheet_file"), (req,res,next)=>{
    debugger;
    const newSheet = {
        title: req.body.title,
        // composer: req.body.composer, // an objectId
        // arrangement_author: req.body.arrangement_author, // an objectId
        // year: req.body.year,
        // genre: req.body.genre,
        // voices: req.body.voices,
        files: [req.file.path],
        // video: [req.body.video],
        // tags: req.body.tags,
        // uploader: ""
    }
    Music.create(newSheet)
    .then(seeSheet => {
        console.log(seeSheet)
        debugger
    })
    .catch(err=>{
        debugger
        console.log(err)
    })
})

module.exports = router;
