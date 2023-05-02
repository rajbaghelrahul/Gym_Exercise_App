const mongoose = require('mongoose');
require('./config');


const UsersSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const Users = mongoose.model("users", UsersSchema);
module.exports = Users;