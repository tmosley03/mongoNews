// Controller for scraper
// ============================
const db = require("../models");
const scrape = require("../scripts/scrape");

module.exports = {
  scrapeHeadlines: function (req, res) {
    return scrape()
      .then(function (articles) {
        //insert articles into the db
        return db.Headline.create(articles);
      })
      .then(function (dbHeadline) {
        if (dbHeadline.length === 0) {
          res.json({
            message: "No new articles"
          });
        } else {
          // how many new articles
          res.json({
            message: "Added " + dbHeadline.length + " new articles."
          });
        }
      })
      .catch(function (err) {
        res.json({
          message: "Scrape complete!!"
        });
      });
  }
};