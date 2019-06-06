const mongoose = require("mongoose");
const Music = require("./music.js");
const Choir = require("./choir.js")


const userSchema = new mongoose.Schema({
    is_conductor: Boolean,
    conducts: { type: mongoose.Schema.Types.ObjectId, ref: Choir },
    sings_in: { type: mongoose.Schema.Types.ObjectId, ref: Choir },
    email: String,
    first_name: String,
    last_name: String,
    password: String,
    voice: String,
    uploads: [{ type: mongoose.Schema.Types.ObjectId, ref: Music }],
    favourites: [{ type: mongoose.Schema.Types.ObjectId, ref: Music }]

});

const User = mongoose.model("user", userSchema);

module.exports = User;