// require npms
var axios = require("axios");
// var spotifty = require('node-spotify-api');

// constructor
var spotifty = new spotifty(keys.spotify);


var dotenv = require('dotenv').config();
var keys = require("./keys.js");


// commands
// use constructors for each type of command

    // "concert-this"
        // searches bands in town artist events api
        // api: "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
            // name of venue; venue location; date of event mm/dd/yyyy
    
    

    // "spotify-this-song"
        // show info abt show in terminal:
            // artist; song name; preview link of song from spotify; album song is from
            // if no song provided, default to "the sign" by Ace of Base
            // will use:
                // node-spotify-api package
                // client and secret IDs needed

    // "movie-this"
        // output in terminal:
            // Title of the movie.
            // Year the movie came out.
            // IMDB Rating of the movie.
            // Rotten Tomatoes Rating of the movie.
            // Country where the movie was produced.
            // Language of the movie.
            // Plot of the movie.
            // Actors in the movie.

        // default: "mr. nobody" 
        // with <http://www.imdb.com/title/tt0485947/>
        // it's on netflix!
        // usee axios package to retrieve from ombd api

    // "do-what-it-says"
        // fs.readFile random.txt

