const mongoose = require("mongoose");
const Music = require("./music");
const user = require("./user");

const choirSchema = new mongoose.Schema({
    name: String,
    conductor: [{ type: mongoose.Schema.Types.ObjectId, ref: user }],
    singers: [{ type: mongoose.Schema.Types.ObjectId, ref: user }],
    choir_type: String,
    city: String,
    about: String,
    repertoire: [{ type: mongoose.Schema.Types.ObjectId, ref: Music }]
});

const Choir = mongoose.model("choir", choirSchema);

module.exports = Choir;