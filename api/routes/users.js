// const express = require("express");
// const router = express.Router();
// var bcrypt = require("bcrypt");

// const User = require("../models/user.js");

// router.post("/sign_up", function(req, res, next) {
//   User.find({ email: req.body.email }).then(user => {
//     if (user.length > 0)
//       res.status(403).json({ message: "Email already taken" });
//     else {
//       bcrypt.genSalt(10, function(err, salt) {
//         bcrypt.hash(req.body.password, salt, function(err, hash) {
//           if (err) res.status(500).json({ message: err });
//           else {
//             User.create({
//               first_name: req.body.first_name,
//               last_name: req.body.last_name,
//               email: req.body.email,
//               password: hash
//             })
//               .then(() => {
//                 res.status(200).json({ message: "Signed up" });
//               })
//               .catch(err => {
//                 res.status(500).json({ message: err });
//               });
//           }
//         });
//       });
//     }
//   });
// });

// router.post("/log_in", function(req, res, next) {
//   User.findOne({ email: req.body.email })
//     .then(user => {
//       if (user) {
//         bcrypt.compare(req.body.password, user.password, function(err, match) {
//           if (err) res.status(500).json({ message: err });
//           else if (match) {
//             delete user.password;
//             req.session.user = user;
//             res.status(200).json({ message: "Logged in." });
//           } else {
//             res.status(403).json({ message: "Invalid credentials." });
//           }
//         });
//       } else {
//         res.status(403).json({ message: "Invalid credentials." });
//       }
//     })
//     .catch(err => {
//       res.status(500).json({ message: err });
//     });
// });

// router.post("/get_user", (req, res) => {
//   debugger;
//   if (req.session.user) {
//     res.status(200).json(req.session.user);
//   } else {
//     res.status(403).json({ message: "Not logged in" });
//   }
// });

// // router.get("/user_info", (req, res) => {
// //   if (req.session.user) {
// //     de
// //     User.findOne({_id: req.session.user._id})
// //       .populate("favs")
// //       .populate("uploads")
// //       .then(result=>{
// //         res.json(result)
// //       })
// //   } else {
// //     res.status(403).json({ message: "Not logged in" });
// //   }
// // });

// router.post("/edit_user", (req, res) => {
//   User.findOneAndUpdate(
//     { _id: req.session.user._id },
//     {
//       is_conductor: req.body.is_conductor,
//       conducts: req.body.conducts,
//       sings_in: req.body.sings_in,
//       email: req.body.email,
//       first_name: req.body.first_name,
//       last_name: req.body.last_name,
//       password: req.body.password,
//       voice: req.body.voice
//     }
//   )
//     .then(result => {
//       res.status(200).json({ message: "Profile updated" });
//     })
//     .catch(err => {
//       res.status(500).json({ message: `not updated! ${err}` });
//     });
// });

// router.post("/log_out", (req, res) => {
//   if (req.session.user) {
//     req.session.destroy();
//     res.status(200).json({ message: "Logged out" });
//   } else {
//     res.status(403).json({ message: "Not logged in" });
//   }
// });

// module.exports = router;
