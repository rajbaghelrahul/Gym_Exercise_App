const mongoose = require('mongoose');
require('./config');

const ExerciseSchema = new mongoose.Schema({
    id: Number,
    bodyPart: String,
    equipment: String,
    gifUrl: String,
    name: String,
    target: String,
});



const Exercises = mongoose.model("exercises", ExerciseSchema); // this is automaticaly add in "firsts" collection in Database because of "firsts" is create by mongoose.
module.exports = Exercises;