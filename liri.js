// questions:
// moment.js for concert();
// default for song() "spotify-this-song command"


// require npms/files
var axios = require("axios");
var Spotify = require("node-spotify-api");
var moment = require('moment');
moment().format();
var dotenv = require('dotenv').config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

// command like vars
var command = process.argv[2];
var search = process.argv.slice(3).join(" ");
var musicArtist = process.argv.slice(4).join(" ");

// COMMAND "concert-this"
// bands in town api
var bandsAPI = "https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp"


// COMMAND "concert-this function"
function concert() {
    axios.get(bandsAPI).then(
        function (response) {

            for (var i = 0; i < response.data.length; i++) {
                console.log("Artist: " + response.data[i].lineup[i]);
                console.log("Venue: " + response.data[i].venue.name + ", in " + response.data[i].venue.city + ", " + response.data[i].venue.region);

                var time = response.data[i].datetime
                console.log("Date: " + time);
                moment(time, "MM-DD-YYYY");

            }
        }).catch(function (error) {
            console.log(error)
        })
};




// "spotify-this-song"
// show info abt show in terminal:
// artist; song name; preview link of song from spotify; album song is from
// if no song provided, default to "the sign" by Ace of Base
// will use:
// node-spotify-api package
// client and secret IDs needed

function song() {
    spotify.search({ type: 'track', query: search }, function (err, data) {

        if (err) {
            return console.log('Error occurred: ' + err);

        } else {
        var results = data.tracks.items
        for (i = 0; i < results.length; i++) {
            // console.log(results[i]);
            console.log("========================");
            console.log("Artist: " + results[i].artists[0].name);
            console.log("Song name: " + results[i].name)
            console.log("Album: " + results[i].album.name);
            console.log("Link to Spotify: " + results[i].external_urls.spotify);
        }
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

