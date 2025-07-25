const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        default: ''
    },
    username: {
        type: String,
        required: true,
        unique: true
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
    bio: {
        type: String,
        default: '',
        maxlength: 200
    },
    gender: {
        type: String,
        default: ''
    },
    avatarURL: {
        type: String,
        default: ''
    },

    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    isAuthenticated: {
        type: Boolean, default: true
    }
}, { timestamps: true })
const userModel = mongoose.model('User', UserSchema)
module.exports = userModel