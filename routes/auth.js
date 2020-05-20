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
router.get("/login", async (req, res) => {
    res.render('home/login.ejs')

})
router.post("/login", async (req, res) => {
    const { username, password} = req.body
    try {
        const foundUser = await User.findOne({username : 'username', password : 'password'})
        console.log("database located the user", foundUser)
        res.status(200).render("users/index.ejs", {
            user: foundUser
        })
    } catch (err) {
        console.log(err)
    }
})

module.exports = router
