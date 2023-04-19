const express = require("express");
const app = express();
const mongoose = require('mongoose');

const DB = 'mongodb+srv://rajbaghelrahul:cSrH26tg8xeL6nNx@cluster0.j825xg6.mongodb.net/gymAppNew?retryWrites=true&w=majority'

// const connectDB = () => {
//     console.log("connect db.")
//     return mongoose.connect(DB, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     });
// };

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((res) => {
    console.log("Database is connected.");
}).catch((err) => {
    console.log("Database is not connected");
});

// Middleware

const middleware = (req, res, next) => {
    console.log("Hello my Middleware"); // its shows on console
    next();
}

app.get('/', (req, res) => {
    console.log("Hello my Home");
    res.send("Hello Home World! from server.");
});

app.get('/about', middleware, (req, res) => {

    console.log("Hello my About"); // its shows on console
    res.send("Hello About world from the server"); // its shows on web page.
});

app.listen(3001);
console.log("Hello World!");