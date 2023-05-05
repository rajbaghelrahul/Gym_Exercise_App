const mongoose = require('mongoose');
require('dotenv').config();

const DB = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.j825xg6.mongodb.net/gymApp?retryWrites=true&w=majority`;

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