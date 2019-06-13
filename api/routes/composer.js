const express = require("express")
const router = express.Router();

const Music = require("../models/music.js");
const Composer = require("../models/composer.js");


router.post("/add_composer", (req,res)=>{
    debugger
    const newComposer = new Composer({
        first_name: req.body.first_name ,
        last_name:  req.body.last_name ,
        wiki_link:  req.body.wiki_link ,
        works: [],
        arrangements: [],
        is_person: true
    })
    newComposer
    .save()
    .then(result => {
      debugger;
      res.json(result);
    })
    .catch(err => {
      console.log(`Error` + err);
    });

})


module.exports = router;