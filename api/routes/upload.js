const express = require("express")
const router = express.Router();

var path = require('path')

var multer  = require('multer')
var storage = multer.diskStorage({
    destination: './public/library',
    filename: function (req, file, cb) {
      cb(null, file.originalname + Date.now() + path.extname(file.originalname)) //Appending extension
    } // - taking in the file with it's extention as provided by the user is a potential vulnerability. The safe way is to get extention via file.mimetype. Oh well, one day...
  })
var upload = multer({storage: storage})

const Music = require("../models/music.js");
const Composer = require("../models/composer.js");

router.post("/upload", upload.single("sheet_file"), (req,res,next)=>{
   const newSheet = new Music({
       title: req.body.title,
       // composer: req.body.composer, // an objectId
       // arrangement_author: req.body.arrangement_author, // an objectId
       // year: req.body.year,
       // genre: req.body.genre,
       // voices: req.body.voices,
       // path: `/library/${req.file.filename}`,
       files: `/library/${req.file.filename}`,
       // video: [req.body.video],
       // tags: req.body.tags,
       // uploader: ""

   })
   newSheet.save()
   .then(result => {
       res.json(newSheet)
   })
   .catch(err => {
       console.log(`Error` + err)
   })
})



module.exports = router;
