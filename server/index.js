const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const Exercises = require('./exercises');
const Users = require('./users');
const loggedUser = require('./loggedUser.js');



// Middleware

const middleware = (req, res, next) => {
    console.log("Hello my Middleware"); // its shows on console
    next();
}






// Routes
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


// User Routes
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Users.findOne({ email: email });
        if (user) {
            if (password === user.password) {
                res.send({ message: "User logged In", user: user });
                console.log("User logged In", user);
            } else {
                res.send({ message: "Password is Incorrect"});
                console.log("Invalid Password");
            }
        } else {
            res.send({ message: "Invalid User" });
            console.log("Invalid User");
        }
    } catch (error) {
        console.log(error);
    }
})
 





app.get('/register', async (req, res) => {
    try {
        // console.log(req.body);
        let data = await Users.find();
        console.log(data);
        res.send(data);

    } catch (error) {
        console.log(error);
    }
})
app.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        let user =  await Users.findOne({email: email})
        if(user){
            res.send({message: "User already registered"})
            console.log("User already registered");
        } else {
            // const newUser = new Users(req.body)
            // OR
            const newUser = new Users({
                name,
                email,
                password
            })
            const resp = await newUser.save();
            // const resp = await newUser.save((err) => { // It is now working properly instead of it we use different way.
            //     if(err) {
            //         res.send(err)
            //     } else {
            //         res.send({ message: "Successfully Registered, Please login now." })
            //     }
            // })
            // res.send({ message: "Successfully Registered, Please login now." })
            console.log({ message: "Successfully Registered, Please login now."})
            res.send({ message: "Successfully Registered, Please login now."} );
            
            
        }
    } catch (error) {
        console.log(error);
    }
})






app.get('/about', middleware, (req, res) => {

    console.log("Hello my About"); // its shows on console
    res.send("Hello About world from the server"); // its shows on web page.
});

app.listen(3004);
console.log("Hello World!");