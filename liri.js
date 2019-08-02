// require npms
var axios = require("axios");
var Spotify = require("node-spotify-api");

var dotenv = require('dotenv').config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);




var command = process.argv[2];
var search = process.argv.slice(3).join(" ");

// bands in town api
var bandsAPI = "https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp"


// commands
// use constructors for each type of command

// "concert-this"
// searches bands in town artist events api
// api: "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
// name of venue; venue location; date of event mm/dd/yyyy
// make function in constructor w api key





function concert() {
console.log(bandsAPI)
    axios.get(bandsAPI).then(
        function(response) {
            console.log(response.data)
            for (var i = 0; i < response.data.length; i++) {
            console.log(response.data[i])
            console.log("test")
            }
        }).catch(function (error) {

            console.log(error)
        })
   
}




// "spotify-this-song"
// show info abt show in terminal:
// artist; song name; preview link of song from spotify; album song is from
// if no song provided, default to "the sign" by Ace of Base
// will use:
// node-spotify-api package
// client and secret IDs needed

function song(){
    spotify.search({ type: 'track', query: search }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       var results = data.tracks.items
      for (i = 0; i < results.length; i++) {
          console.log(results[i].name)
      }
      });
}


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

switch (command) {
    case "concert-this":
        concert();
        break;
    case "spotify-this-song":
        song();
        break;

}

