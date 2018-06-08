//Difine Mongoose Schema

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const headlineSchema = new Schema({
    // headline, a string, must be entered
    headline: {
        type: String,
        required: true,
        unique: { index: { unique: true } }
    },
    // summary, a string, must be entered
    summary: {
        type: String,
        required: true
    },
    // url, a string, must be entered
    url: {
        type: String,
        required: true
    },
    // date is just a string
    date: {
        type: Date,
        default: Date.now
    },
    saved: {
        type: Boolean,
        default: false
    }
});

const Headline = mongoose.model("Headline", headlineSchema);

module.exports = Headline;