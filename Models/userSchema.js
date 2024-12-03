// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId:Number,
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
