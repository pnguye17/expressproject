const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String, 
        required: true, 
        unique: true 
    },
    checkingAccounts: [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref: "CheckingAccount"
        }
    ],
    savingsAccounts: [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "SavingAccount"
        }
    ]
})

module.exports = User = mongoose.model('User', UserSchema)