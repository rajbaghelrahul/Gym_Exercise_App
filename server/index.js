const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const Exercises = require('./exercises');



// Middleware

const middleware = (req, res, next) => {
    console.log("Hello my Middleware"); // its shows on console
    next();
}

app.get('/exercises', async (req, res) => {
    try {
        let result = await Exercises.find();
        // let result = await Exercises.find({bodyPart: "waist"});
        // console.log(result);
        res.send(result);
        console.log("Hello my Home");
        // res.send("Hello Home World! from server.");
        
    } catch (error) {
        console.log(error);
    }
});
app.get('/exercises/:id', async (req, res) => {
    try {
        let result = await Exercises.findById(req.params.id);
        // let result = await Exercises.find({bodyPart: "waist"});
        console.log(result);
        res.send(result);
        // console.log("Hello my Exercise Details page.");
        // res.send("Hello Exercises Details page World! from server.");
        
    } catch (error) {
        console.log(error);
    }
});
app.get('/search/:exerciseName', async (req, res) => {
    try {
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
        
    } catch (error) {
        console.log(error);
    }
});


app.get('/about', middleware, (req, res) => {

    console.log("Hello my About"); // its shows on console
    res.send("Hello About world from the server"); // its shows on web page.
});

app.listen(3004);
console.log("Hello World!");