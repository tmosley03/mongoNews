//=== Note model

var mongoose = require("mongoose");
//=== Create the schema class using mongoose's schema method
var Schema = mongoose.Schema;

//=== Create the noteSchema with the schema object
var noteSchema = new Schema({
    //=== The headline is the article associate with the note
    _headlineId: {
        type: Schema.Types.ObjectId,
        ref: "Headline"
    },
    //=== date is just a string
    date: {
        type: Date,
        default: Date.now
    },
    //=== object is implied because of single property
    noteText: String
});


var Note = mongoose.model("Note", noteSchema);

//=== Export the Note model
module.exports = Note;
