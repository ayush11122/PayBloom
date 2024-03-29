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
        type: String,
        required: true,
        maxLength: 40
    },
    lastname: {
        type: String,
        required: false,
        maxLength: 40
    }
});

const AccountSchema = mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true,
    }
})

const User = mongoose.model('User', UserSchema);
const Account = mongoose.model('Account', AccountSchema);

module.exports = {
    User, Account
}