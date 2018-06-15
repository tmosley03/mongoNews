// Dependencies
const express = require("express");
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
// Require request and cheerio. This makes the scraping possible
const cheerio = require("cheerio");

// Initialize Express
const app = express();

//MLab connection
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://root:password1@ds139919.mlab.com:39919/mongo-news"

mongoose.connect(MONGODB_URI, function () {
  console.log("Connected to Database")
});

//============================================

// Set up our port to be either the host's designated port, or 3000
const PORT = process.env.PORT || 3000;

// Instantiate our Express App
//let app = express();

//=== Require routes
const routes = require("./routes");

//=== tell the app where to find all of the assests
app.use(express.static("public"));

//=== handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//=== bodyParser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Have every request go through our route middleware
app.use(routes);

//=======================================================




// Listen on port 3000
app.listen(PORT, function() {
  console.log("App running on port 3000");
});
