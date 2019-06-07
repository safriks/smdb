const express = require("express")
const router = express.Router();
var bcrypt = require("bcrypt")

const User = require("../models/user.js");

router.post('/sign_up', function(req, res, next) {
    debugger
    User.find({email: req.body.email})
      .then((user)=> {
        debugger
        if(user.length > 0 ) res.status(403).json({message: "Email already taken"})
        else {
          bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(req.body.password, salt, function(err, hash) {
                if(err) res.status(500).json({message: err})
                else {
                  User.create({
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                    password: hash
                  })
                  .then(()=> {
                    res.status(200).json({message: "Signed up"})
                  })
                  .catch((err)=> {
                    res.status(500).json({message: err})
                  })
                }
            });
          });
        }
      })
  });
  
  router.post('/log_in', function(req, res, next) {
    debugger
    User.findOne({email: req.body.email})
      .then((user)=> {
        debugger
        if(user) {
          bcrypt.compare(req.body.password, user.password, function(err, match){
            if(err) res.status(500).json({message: err}) 
            else if(match) {
              delete user.password
              req.session.user = user
              debugger
              res.status(200).json({message: "Logged in."})
            } else {
              res.status(403).json({message: "Invalid credentials."})
            }
          })
        } else {
          res.status(403).json({message: "Invalid credentials."})
        }
      })
      .catch((err)=> {
        debugger
        res.status(500).json({message: err}) 
      })
  });
  
  router.post("/get_user", (req, res)=> {
    debugger
    if(req.session.user) {
        debugger
      res.status(200).json(req.session.user)
    } else {
        debugger
      res.status(403).json({message: "Not logged in"})
    }
  })
  
  router.post("/logout", (req, res)=> {
    if(req.session.user) {
      req.session.destroy()
      res.status(200).json({message: "Logged out"})
    } else {
      res.status(403).json({message: "Not logged in"})
    }
  })
  
  module.exports = router;
  
