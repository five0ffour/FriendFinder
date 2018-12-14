// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

var friends = require("./app/data/friends.js");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3030;              // localhost
// const PORT = process.env.PORT; // heroku

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Routes for displaying HTML pages
// ===========================================================
// route sends user to home page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});

// route sends user to home page
app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});

// route sends user to survey page
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

// Routes for gets
// ===========================================================
// Displays all tables
app.get("/api/friends", function (req, res) {
    return res.json(friends);
});

// Routes for posts
// ===========================================================

// Take in the survey information - takes in JSON input
app.post("/api/survey", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newFriend = req.body;

    console.log(newFriend);
    friends.push(newFriend);

    // run the survey match logic here.
    // var surveyResults = processSurvey(newFriend);

    // We then display the survey  JSON to the users
    res.json(true);
});

// Listener
// ===========================================================
app.listen(PORT, function () {
    console.log("FriendFinder app listening on PORT " + PORT);
});