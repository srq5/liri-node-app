

//1. OMDB function
//2. Spotify function
//3. Twitter function
//4. Do what it says function
//5. Switch statemtent, call functions.


var request = require("request");
var fs = require("fs");
var keys = require("./keys.js");

var commandString = process.argv[2];
var argTwo = process.argv[3];
var argThree = process.argv[4];
var argFour = process.argv[5];
var argFive = process.argv[6];
var argSix = process.argv[7];
var argSeven = process.argv[8];



function omdb() {

    //If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

    var queryURL = "http://www.omdbapi.com/?t=" + argTwo + "%20" + argThree + "%20" + argFour + "%20" + argFive + "%20" + argSix + "%20" + argSeven + "&apikey=trilogy"

    request(queryURL, function (err, res, body) {

        console.log("TITLE: " + JSON.parse(body).Title);
        console.log("YEAR: " + JSON.parse(body).Year);
        console.log("IMDB: " + JSON.parse(body).Ratings[0].Value);
        console.log("RT: " + JSON.parse(body).Ratings[1].Value);
        console.log("COUNTRY: " + JSON.parse(body).Country);
        console.log("LANG: " + JSON.parse(body).Language);
        console.log("PLOT: " + JSON.parse(body).Plot);
        console.log("ACTORS: " + JSON.parse(body).Actors);

    });
}







//convert to switch statement

if (commandString === "movie-this") {
    omdb();
}
