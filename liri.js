//### BUGS TO FIX:
//1. Provide a default song/movie when no argument is passed in.
//2. Parse the my tweets object to show only the text. Also, use the "count" parameter for the Twitter API endpoint I have use to get 20 tweets. 
//3. Have the strings that are read from "random.txt" be passed in as arguments.

var request = require("request");
var fs = require("fs");
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var Twitter = require("twitter");

var commandString = process.argv[2];
var argTwo = process.argv[3];

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

    request("http://www.omdbapi.com/?t=" + argTwo + "&apikey=trilogy", function (err, res, body) {

        console.log("TITLE: " + JSON.parse(body).Title);
        console.log("YEAR: " + JSON.parse(body).Year);
        console.log("IMDB: " + JSON.parse(body).Ratings[0].Value);
        console.log("RT: " + JSON.parse(body).Ratings[1].Value);
        console.log("COUNTRY: " + JSON.parse(body).Country);
        console.log("LANG: " + JSON.parse(body).Language);
        console.log("PLOT: " + JSON.parse(body).Plot);
        console.log("ACTORS: " + JSON.parse(body).Actors);

        fs.appendFile('./log.txt', body, function (err) {

            if (err) {
                console.log(err);
            }

            else {
                console.log("\nContent added to log.");
            }

        });

    });

}

function spotifyThisSong() {

    spotify.search({ type: 'track', query: argTwo }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        var artistName = "ARTIST: " + data.tracks.items[0].artists[0].name;
        var trackName = "TRACK: " + data.tracks.items[0].name;
        var albumName = "ALBUM: " + data.tracks.items[0].album.name;
        var previewUrl = "PREVIEW URL: " + data.tracks.items[0].preview_url;

        console.log(trackName);
        console.log(artistName);
        console.log(albumName);
        console.log(previewUrl);

        fs.appendFile('./log.txt', trackName, function (err) {

            if (err) {
                console.log(err);
            }

            else {
                console.log("\nContent added to log.");
            }

        });
    });

}

function myTweets() {
    // Latest 20 tweets and when they were created.
    // I want just the tweet text, not the whole obj.
    var parameters = { screen_name: 'ErQ7d', count: '20' };

    twitter.get('statuses/user_timeline', parameters, function (error, tweets, response) {
        if (!error) {
            console.log(tweets);

        }
    });

}

// ### Is there a more elegant way to assign my command arguments?
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