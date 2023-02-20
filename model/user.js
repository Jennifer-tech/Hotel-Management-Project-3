const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required.']
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: ['guest', 'admin'],
        default: 'guest'
    }
});

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;