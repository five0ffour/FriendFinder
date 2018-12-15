var friends = require("../data/friends.js");

module.exports = function (app) {

    // Routes for gets
    // ===========================================================
    // Displays all tables
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    // Routes for posts
    // ===========================================================

    // Take in the survey information - takes in JSON input
    app.post("/api/friends", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var newFriend = req.body;

        friends.push(newFriend);

        // run the survey match logic here.
        // var surveyResults = processSurvey(newFriend);
        var match = {};
        match.name = friends[0].name;
        match.photo = friends[0].photo;

        // We then display the survey  JSON to the users
        res.json(match);
    });
}