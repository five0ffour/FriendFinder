var path = require("path");

module.exports = function(app) {

// Routes for displaying HTML pages
// ===========================================================
// route sends user to home page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

// route sends user to home page
app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

// route sends user to survey page
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

}