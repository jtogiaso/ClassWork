// Students: Using this template, the cheerio documentation,
// and what you've learned in class so far, scrape a website
// of your choice, save information from the page in a result array, and log it to the console.

var cheerio = require("cheerio");
var request = require("request");

// Make a request call to grab the HTML body from the site of your choice
request("http://www.nba.com/#/", function(error, response, html) {

  // Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  var $ = cheerio.load(html);

  // An empty array to save the data that we'll scrape
  var results = [];

  // Select each element in the HTML body from which you want information.
  // NOTE: Cheerio selectors function similarly to jQuery's selectors,
  // but be sure to visit the package's npm page to see how it works
  $("tbody#teams").each(function(i, element) {

    var away_team = $(element);
    // var away_team_score = $(article).children().text();
    // var home_team = $(article).children().attr("href"); 
    // var home_team_score = $(article).children().text();

    // Save these results in an object that we'll push into the results array we defined earlier
    results.push({
      // home_team: home_team,
      // home_team_score: home_team_score,
      away_team: away_team,
      // away_team_score: away_team_score
    });
  });

  // Log the results once you've looped through each of the elements found with cheerio
  console.log(results);
});
