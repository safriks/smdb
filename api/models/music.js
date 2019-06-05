const mongoose = require("mongoose");
const Composer = require("./composer.js");


const musicSchema = new mongoose.Schema({
    title:  String,
    composer: { type: mongoose.Schema.Types.ObjectId, ref: Composer },
    arrangement_author: { type: mongoose.Schema.Types.ObjectId, ref: Composer },
    arrangement_type: String,
    year: String,
    genre: Array,
    voices: Array,
    //path: String, // this was a temporary placeholder for the path to a single file
    files: Array, 
    video: Array,
    uploader: mongoose.Schema.ObjectId,
    tags: Array
})

const Music = mongoose.model("sheet", musicSchema);

module.exports = Music;

