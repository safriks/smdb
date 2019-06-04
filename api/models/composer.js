const mongoose = require("mongoose");
const Music = require("./music.js");


const composerSchema = new mongoose.Schema({
    first_name:  String,
    last_name:  String,
    wiki_link:  String,
    works: [{ type: mongoose.Schema.Types.ObjectId, ref: Music }],
    arrangements: [{ type: mongoose.Schema.Types.ObjectId, ref: Music }],
    is_person: Boolean
})

const Composer = mongoose.model("composer", composerSchema);

module.exports = Composer;