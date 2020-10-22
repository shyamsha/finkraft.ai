const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
app.use(express.static(path.join(__dirname, "client/build")));
app.use(express.json());
app.use(cors());
const mongoose = require("./config/dbConnect");

app.get("/", (req, res) => {
	res.send("welcome to contact manager");
});


app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(port, function() {
	console.log("listening request from", port);
});
