const mongoose = require("mongoose")

const CustomerSchema = {
    id: Number,
    firstName: String,
    lastName: String,
    password: String,
    account: AccountSchema
}


