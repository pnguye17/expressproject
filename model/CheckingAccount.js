const mongoose = require('mongoose')

const checkingAccountSchema = mongoose.Schema({
    balance: {
        type: Number,
        default: 0
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
})

module.exports = CheckingAccount = mongoose.model('CheckingAccount', checkingAccountSchema)