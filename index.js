const express = require("express");
const app = express();
const port = 3000;


app.get("/", (req, res) => res.send("Hello this is the start of my app"));


app.listen(port, (req, res) =>  console.log("the app is running"));