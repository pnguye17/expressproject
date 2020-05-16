const mongoose = require('mongoose')

const checkingAccountSchema = mongoose.Schema({
    balance: Number,
    belongTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = CheckingAccount = mongoose.model('CheckingAccount', checkingAccountSchema)