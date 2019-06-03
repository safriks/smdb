const mongoose = require("mongoose");

const composerSchema = new mongoose.Schema({
    first_name:  String,
    lasr_name:  String,
    wiki_link:  String,
    works: Array,
    arrangements: Array,
    is_person: Boolean
})

const Composer = mongoose.model("composer", composerSchema);

module.exports = Composer;