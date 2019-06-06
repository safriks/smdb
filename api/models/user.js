const mongoose = require("mongoose");
const Music = require("./music.js");

const userSchema = new mongoose.Schema({
    is_conductor: Boolean,
    email: String,
    first_name: String,
    last_name: String,
    password: String,
    voice: String,
    uploads: Array,

});

const User = mongoose.model("user", userSchema);

module.exports = User;