// Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3030;              // localhost
// const PORT = process.env.PORT; // heroku

// Sets up the Express app to handle data parsing
// app.use(express.urlencoded({
//     extended: true
// }));
// app.use(express.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
require("./app/routing/apiRoutes.js")(app)
require("./app/routing/htmlRoutes")(app);

// Listener
// ===========================================================
app.listen(PORT, function () {
    console.log("FriendFinder app listening on PORT " + PORT);
});
