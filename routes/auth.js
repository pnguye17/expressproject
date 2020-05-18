const express = require("express")
const router = express.Router()
const User = require("../model/User")

router.get("/register", (req, res) => {
    res.render("home/register.ejs")
})
router.post("/register", async (req, res) => {
    const { firstName, lastName, username, password} = req.body
    try {
        const newUser = new User({
            "firstName": firstName,
            "lastName": lastName,
            "username": username,
            "password": password
        })
        User.create(newUser)
        res.status(200).json(newUser)
    } catch (err) {
        res.status(500).json({
            error: err.body
        })
    }
})

module.exports = router
