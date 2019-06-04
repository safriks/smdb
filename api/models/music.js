const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema({
    title:  String,
    composer: mongoose.Schema.ObjectId,
    arrangement_author: mongoose.Schema.ObjectId,
    arrangement_type: String,
    year: String,
    genre: Array,
    voices: Array,
    files: Array, 
    video: Array,
    uploader: mongoose.Schema.ObjectId,
    tags: Array
})

const Music = mongoose.model("sheet", musicSchema);

module.exports = Music;

