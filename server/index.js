const express = require('express');
const app = express();
app.use(express.json());
const Exercises = require('./exercises');



// Middleware

const middleware = (req, res, next) => {
    console.log("Hello my Middleware"); // its shows on console
    next();
}

app.get('/exercises', async (req, res) => {
    let result = await Exercises.find();
    // let result = await Exercises.find({bodyPart: "waist"});
    console.log(result);
    res.send(result);
    // console.log("Hello my Home");
    // res.send("Hello Home World! from server.");
});
app.get('/exercises/:id', async (req, res) => {
    let result = await Exercises.findOne({_id: req.params.id});
    // let result = await Exercises.find({bodyPart: "waist"});
    console.log(result);
    res.send(result);
    console.log("Hello my Exercise Details page.");
    // res.send("Hello Exercises Details page World! from server.");
});
app.get('/search/:exerciseName', async (req, res) => {
    let data = await Exercises.find({
        '$or': [
            {"bodyPart": {$regex: req.params.exerciseName}},
            // {"age":{$regex:req.params.key}},
            {"target": {$regex: req.params.exerciseName}},
            {"equipment": {$regex: req.params.exerciseName}}
        ]
    })
    console.log(data);
    res.send(data);
});


app.get('/about', middleware, (req, res) => {

    console.log("Hello my About"); // its shows on console
    res.send("Hello About world from the server"); // its shows on web page.
});

app.listen(3001);
console.log("Hello World!");