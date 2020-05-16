const mongoose = require('mongoose')

const savingAccountSchema = mongoose.Schema({
    balance: Number,
    belongTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = SavingAccount = mongoose.model('SavingAccount', savingAccountSchema)