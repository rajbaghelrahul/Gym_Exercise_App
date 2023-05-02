const mongoose = require('mongoose');
require('./config');


const UsersSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const loggedUser = mongoose.model("loggedusers", UsersSchema);
module.exports = loggedUser;