const mongoose = require('mongoose');
require('dotenv').config();
const DB = process.env.DB_link;

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