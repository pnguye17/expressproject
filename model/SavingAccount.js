const mongoose = require('mongoose')

const savingAccountSchema = mongoose.Schema({
    name: {
        type: String,
        default: "Saving"
    },
    balance: {
        type: Number,
        default: 0
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
})

module.exports = SavingAccount = mongoose.model('SavingAccount', savingAccountSchema)