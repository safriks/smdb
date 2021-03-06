const express = require("express");
const router = express.Router();

var path = require("path");

var multer = require("multer");
var storage = multer.diskStorage({
  destination: __dirname + "/../public/library",
  filename: function(req, file, cb) {
    cb(null, file.originalname + Date.now() + path.extname(file.originalname)); //Appending extension
  } // - taking in the file with it's extention as provided by the user is a potential vulnerability. The safe way is to get extention via file.mimetype. Oh well, one day...
});
var upload = multer({ storage: storage });

const Music = require("../models/music.js");
const Composer = require("../models/composer.js");

router.post(
  "/edit_sheet_and_file",
  upload.single("sheet_file"),
  (req, res, next) => {
    const updatedSheet = {
      title: req.body.title,
      composer: req.body.composer, // an objectId
      arrangement_author: req.body.arrangement_author
        ? req.body.arrangement_author
        : null, // an objectId
      year: req.body.year,
      genre: req.body.genre,
      voices: req.body.voices,
      file: `/library/${req.file.filename}`,
      video: req.body.video,
      tags: req.body.tags
    };
    Music.findOneAndUpdate({ _id: { $eq: req.body._id } }, updatedSheet)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        console.log(`Error` + err);
      });
  }
);

router.post("/edit_sheet", upload.single("sheet_file"), (req, res, next) => {
  const updatedSheet = {
    title: req.body.title,
    composer: req.body.composer, // an objectId
    arrangement_author: req.body.arrangement_author
      ? req.body.arrangement_author
      : null, // an objectId
    year: req.body.year,
    genre: req.body.genre,
    voices: req.body.voices,
    video: req.body.video,
    tags: req.body.tags
  };
  Music.findOneAndUpdate({ _id: { $eq: req.body._id } }, updatedSheet)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      console.log(`Error` + err);
    });
});

router.post("/upload", upload.single("sheet_file"), (req, res, next) => {
  const newSheet = new Music({
    title: req.body.title,
    composer: req.body.composer, // an objectId
    year: "",
    genre: "",
    voices: "",
    path: `${req.file.path}`,
    file: `/library/${req.file.filename}`,
    video: "",
    tags: "",
    uploader: req.session.user._id
  });
  newSheet
    .save()
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      console.log(`Error` + err);
    });
});

module.exports = router;
