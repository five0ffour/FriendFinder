module.exports = function (app) {

    var friends = require("../data/friends.js");

    // ===========================================================
    // Routes for gets
    // ===========================================================

    // Displays all friends in the database
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    // ===========================================================
    // Routes for posts
    // ===========================================================

    // Take in the survey information - takes in an friend JSON input
    app.post("/api/friends", function (req, res) {

        // INPUT - req.body hosts is equal to the JSON post sent from the user
        var newFriend = req.body;

        // PROCESS - run the survey match logic here.
        var bestMatch = processSurvey(newFriend);

        // save our new respondant to the permanent list 
        friends.push(newFriend);

        // OUTPUT - send the best candidate to the user (as JSON)
        res.json(bestMatch);
    });

    // processSurvey - find out their compatibilty score by measuring the differences between the user and canidate resposne of each question
    //               - scoring works like golf, the lower the number the closer the match (least deviation)
    function processSurvey(newFriend) {

        let bestMatchScore = Number.MAX_SAFE_INTEGER // outrageously high value
        let bestMatchIdx = 0;
        for (let i = 0; (i < friends.length); i++) {
            let match = 0;
            for (let j = 0; (j < friends[i].scores.length); j++) {
                match += Math.abs(newFriend.scores[j] - friends[i].scores[j]);
            }

            if (match < bestMatchScore) {
                bestMatchScore = match;
                bestMatchIdx = i;
            }
        }

        console.log(friends[bestMatchIdx]);
        console.log("Score: " + bestMatchScore);
        console.log("Index: " + bestMatchIdx);

        return friends[bestMatchIdx];
    }

}