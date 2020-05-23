const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

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


UserSchema.methods.hashPassword = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  };
  
  UserSchema.methods.hashCompare = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  
  UserSchema.pre("save", function(next) {
    if (this.isModified("password")) {
      this.password = this.hashPassword(this.password);
    }
    next();
  });
  

module.exports = User = mongoose.model('User', UserSchema)