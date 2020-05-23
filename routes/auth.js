const express = require("express")
const router = express.Router()
const User = require("../model/User")
const logger = require("../logger")
const bcrypt = require("bcryptjs")

router.get("/register", (req, res) => {
    res.render("home/register.ejs")
})
router.get("/profile", (req, res) => {
    res.render("users/index.ejs")
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
    logger.write("login post route hit")
    try {
        const foundUser = await User.findOne({username : req.body.username})
        if (foundUser) {
            if (bcrypt.compareSync(req.body.password, foundUser.password)) {
                req.session.dbId = foundUser._id;
                req.session.logged = true;
                req.session.save();
                // res.json({
                //   username: foundUser,
                //   success: true
                // });
                res.render('users/index.ejs', {
                    loggedUser: foundUser
                })
              } else {
                res.json({
                  message: "Invalid username or password"
                });
              }
            }
    } catch (err) {
        console.log(err)
    }
})
router.get("/index", (req, res) => {
    res.render("users/index.ejs")
})

module.exports = router
