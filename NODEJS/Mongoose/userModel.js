const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true },
    email: { type: String, required: true }
});

const User = mongoose.model('users', userSchema);

module.exports = User;
