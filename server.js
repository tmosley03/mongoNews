// Dependencies
var express = require("express");
var mongoose = require('mongoose');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
// Require request and cheerio. This makes the scraping possible
var cheerio = require("cheerio");

// Initialize Express
var app = express();


//MLab connection
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://root:password1@ds139919.mlab.com:39919/mongo-news"

mongoose.connect(MONGODB_URI, function () {
  console.log("Connected to Database")
});

//============================================

// Set up our port to be either the host's designated port, or 3000
var PORT = process.env.PORT || 3000;

// Instantiate our Express App
var app = express();

// Require our routes
var routes = require("./routes");

// Designate our public folder as a static directory
app.use(express.static("public"));

// Connect Handlebars to our Express app
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Use bodyParser in our app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Have every request go through our route middleware
app.use(routes);

//=======================================================




// Listen on port 3000
app.listen(PORT, function() {
  console.log("App running on port 3000!");
});
