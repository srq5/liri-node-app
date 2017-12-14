var request = require("request");
var fs = require("fs");


var keys = require("./keys.js");
var commandString = process.argv[2];
var argTwo = process.argv[3];


if (commandString === "spotify-this-song") {

} else if (commandString === "movie-this") {
    //The OMDB query string will go here. Will concatenate  argTwo for search query.
	
    if (!err && res.statusCode === 200) {

    	request("", function (err, res, body ){

	});

	console.log("TITLE: " + JSON.parse(body).) //OMDB Title property.


    // * Title of the movie.
    //   * Year the movie came out.
    //   * IMDB Rating of the movie.
    //  * Rotten Tomatoes Rating of the movie.
    //   * Country where the movie was produced.
    //   * Language of the movie.
    //   * Plot of the movie.
    //   * Actors in the movie.



    }
	
    




    
} else if (commandString === "my-tweets") {

} else if (commandString === "do-what-it-says") {

	// This will use fs.

}