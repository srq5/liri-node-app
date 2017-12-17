//1. OMDB function
//2. Spotify function
//3. Twitter function
//4. Do what it says function
//5. Switch statemtent, call functions.

var request = require("request");
var fs = require("fs");
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var twitter = require("twitter");

var commandString = process.argv[2];
var argTwo = process.argv[3];
var argThree = process.argv[4];
var argFour = process.argv[5];
var argFive = process.argv[6];
var argSix = process.argv[7];
var argSeven = process.argv[8];

var spotify = new Spotify({
    id: 'bdda8968c4054ebca24067fb92ac5e88',
    secret: '7795bf0b75bc4612ba9ac9e7d2ea5c36'
});

if (commandString === "movie-this") {

    //If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
   
    request("http://www.omdbapi.com/?t=" + argTwo + "&apikey=trilogy", function (err, res, body) {

        console.log("TITLE: " + JSON.parse(body).Title);
        console.log("YEAR: " + JSON.parse(body).Year);
        //console.log("IMDB: " + JSON.parse(body).Ratings[0].Value);
        //console.log("RT: " + JSON.parse(body).Ratings[1].Value);
        console.log("COUNTRY: " + JSON.parse(body).Country);
        console.log("LANG: " + JSON.parse(body).Language);
        console.log("PLOT: " + JSON.parse(body).Plot);
        console.log("ACTORS: " + JSON.parse(body).Actors);

    });

} 

//else if (commandString === "spotify-this-song") {

 //   spotify
 //       .request("https://api.spotify.com/v1/search?q=heaven's+on+fire&type=track&market=US&limit=1" - H "Accept: application/json" - H "Authorization: Bearer BQCb3ZNKVVLopzOsC04FfFz9UqzNfDt_kzQLpdpF-qtKO4OCtP8h5Y0ExpMtjriJcPkCVmoz9w8Jf03Rp5u9I1SRBwDgCzUligagW-2LSVHyIm_D5r1Bi9DXcQu_pIJKpjQGOwt4ebinYG2S")
 //       .then(function (data) {
 //           console.log(data);
  //      })
  //      .catch(function (err) {
  //          console.error('Error occurred: ' + err);
  //      });

//}
