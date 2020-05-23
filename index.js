const express = require("express");
const bodyParser = require("body-parser")
const morgan = require("morgan")
const app = express();
const logger = require("./logger")
const session = require("express-session")
const port = 3000;

//import routes
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth")
const checkingRouter = require("./routes/checkingAccount")


//connect db
require('./config/db')

//set view engine
app.set("view engine", "ejs")
app.use(morgan("dev"))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(
    session({
      secret: "random",
      resave: false,
      saveUninitialized: false
    })
  );

//set routes
app.use(express.static("public"))
app.use("/api", userRouter);
app.use("/api", checkingRouter)
app.use("/", authRouter)

app.get("/", (req, res) => {
    res.render("home/home.ejs");
});



app.listen(port, (req, res) => logger.write(`The app is running on ${port}`))