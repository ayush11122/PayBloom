const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://adminayush:ayushayu@cluster0.ldeh2qv.mongodb.net/PayBloom');

const UserSchema = mongoose.Schema({
    username: {
        type:String,
        required: true,
        unique: true,
        lowercase: true,
        minLength: 3,
        maxLength: 20
    },
    password:{
        type:String,
        required: true,
        minLength: 6,
    }, 
    firstname: {
        Type: String,
        required: true,
        maxLength: 40
    },
    lastname: {
        Type:String,
        required: false,
        maxLength: 40
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = {
    User
}