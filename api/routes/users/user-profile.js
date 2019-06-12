const express = require("express");
const router = express.Router();
var bcrypt = require("bcrypt");

const User = require("../../models/user.js");

router.get("/user_info", (req, res) => {
    if (req.session.user) {
      User.findOne({_id: req.session.user._id})
        .populate("favs")
        .populate("uploads")
        .then(result=>{
          res.json(result)
        })
    } else {
      res.status(403).json({ message: "Not logged in" });
    }
  });
  
  router.post("/edit_user", (req, res) => {
    User.findOneAndUpdate(
      {_id: req.session.user._id},
      {
        is_conductor: req.body.is_conductor,
        conducts: req.body.conducts,
        sings_in: req.body.sings_in,
        email: req.body.email,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: req.body.password,
        voice: req.body.voice
    })
    .then(result=>{
      res.status(200).json({ message: "Profile updated" });
    })
    .catch(err=>{
      res.status(500).json({ message: `not updated! ${err}` });
    })
  })
  



module.exports = router;