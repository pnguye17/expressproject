const express = require("express");
const app = express();
const port = 3000;

//import routes
const userRouter = require("./routes/user");


//connect db
require('./config/db')

//set routes
app.use("/api", userRouter);

app.get("/", (req, res) => {
    res.render("home/home.ejs");
});



app.listen(port, (req, res) =>  console.log("the app is running"));