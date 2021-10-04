var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true ,trim:true },
    email: { type: String, required: true, unique: true,trim:true },
    password: { type: String, required: true,trim:true },
    resetPasswordToken: String,
    resetPasswordExpires: Date
}, {timestamps: true});

mongoose.model('User', UserSchema);