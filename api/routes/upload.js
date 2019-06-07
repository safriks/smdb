const express = require("express");
const router = express.Router();

var path = require("path");

var multer = require("multer");
var storage = multer.diskStorage({
  destination: "./public/library",
  filename: function(req, file, cb) {
    cb(null, file.originalname + Date.now() + path.extname(file.originalname)); //Appending extension
  } // - taking in the file with it's extention as provided by the user is a potential vulnerability. The safe way is to get extention via file.mimetype. Oh well, one day...
});
var upload = multer({ storage: storage });

const Music = require("../models/music.js");
const Composer = require("../models/composer.js");

router.post("/upload", upload.single("sheet_file"), (req, res, next) => {
  debugger;
  const newSheet = new Music({
    title: req.body.title,
    composer: req.body.composer, // an objectId
    arrangement_author: "", // an objectId
    year: "",
    genre: "",
    voices: "",
    path: `/library/${req.file.filename}`,
    file: `/library/${req.file.filename}`,
    video: "",
    tags: "",
    uploader: req.session.user._id
  });
  newSheet
    .save()
    .then(result => {
      debugger;
      res.json(newSheet);
    })
    .catch(err => {
      console.log(`Error` + err);
    });
});

module.exports = router;
