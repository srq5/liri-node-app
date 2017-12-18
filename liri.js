var request = require("request");
var fs = require("fs");
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var Twitter = require("twitter");

var commandString = process.argv[2];
var argTwo = process.argv[3];
var argThree = process.argv[4];
var argFour = process.argv[5];
var argFive = process.argv[6];
var argSix = process.argv[7];
var argSeven = process.argv[8];

var spotify = new Spotify({
    id: keys.spotify_keys.client_id,
    secret: keys.spotify_keys.client_secret
});

var twitter = new Twitter({
    consumer_key: keys.twitter_keys.consumer_key,
    consumer_secret: keys.twitter_keys.consumer_secret,
    access_token_key: keys.twitter_keys.access_token_key,
    access_token_secret: keys.twitter_keys.access_token_secret
});

function doWhatItSays() {

    fs.readFile("random.txt", "utf8", function (error, data) {

        if (error) {
            return console.log(error);
        }

        var dataArray = data.split(",");

        console.log(dataArray[0]);
        console.log(dataArray[1]);

        // Here, I want to turn the items of the array into arguments. 
        commandString = dataArray[0];
        argTwo = dataArray[1];

    });

}

function movieThis() {
    //If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
    // This is only taking one argument.

    request("http://www.omdbapi.com/?t=" + argTwo + "&apikey=trilogy", function (err, res, body) {

        console.log("TITLE: " + JSON.parse(body).Title);
        console.log("YEAR: " + JSON.parse(body).Year);
        //console.log("IMDB: " + JSON.parse(body).Ratings[0].Value);
        //console.log("RT: " + JSON.parse(body).Ratings[1].Value);
        console.log("COUNTRY: " + JSON.parse(body).Country);
        console.log("LANG: " + JSON.parse(body).Language);
        console.log("PLOT: " + JSON.parse(body).Plot);
        console.log("ACTORS: " + JSON.parse(body).Actors);

        fs.appendFile('./log.txt', body, function (err) {

            if (err) {
                console.log(err);
            }

            else {
                console.log("CONTENT ADDED.");
            }

        });

    });

}

function spotifyThisSong() {
    // Drill down into the object. 
    spotify.search({ type: 'track', query: argTwo }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(data);
    });

 

}

function myTweets() {
    // Get just the tweet text.
    var params = { screen_name: 'ErQ7d' };
    
    twitter.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            console.log(tweets);
        }
    });

}

//Is there a more elegant way to assign my command arguments?
if (commandString === "movie-this") {

    movieThis();

} else if (commandString === "spotify-this-song") {

    spotifyThisSong();

} else if (commandString === "my-tweets") {

    myTweets();

} else if (commandString === "do-what-it-says") {

    doWhatItSays();

} else {

    console.log("That is not a command.");

}