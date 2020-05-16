const mongoose = require("mongoose")

const UserSchema = {
    id: Number,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    account: AccountSchema
}


