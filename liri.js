// questions:
// moment.js for concert();
// run function from txt


// require npms/files
var axios = require("axios");
var Spotify = require("node-spotify-api");
var moment = require('moment');
moment().format();
var dotenv = require('dotenv').config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var fs = require("fs");

// command line vars
var command = process.argv[2];
var search = process.argv.slice(3).join(" ");


// APIs
var bandsAPI = "https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp"


//"concert-this" function
function concert() {
    axios.get(bandsAPI).then(
        function (response) {

            for (var i = 0; i < response.data.length; i++) {
                console.log("Artist: " + response.data[i].lineup[i]);
                console.log("Venue: " + response.data[i].venue.name + ", in " + response.data[i].venue.city + ", " + response.data[i].venue.region);

                var timeTwo = [];
                var time = response.data[i].datetime
                let timeTest = time.split("T");

                console.log("Date: " + timeTwo[1]);
                moment(time, "MM-DD-YYYY");

            }
        }).catch(function (error) {
        console.log(error)
    })
};

// "spotify-this-song function"
function song() {
    spotify.search({
        type: 'track',
        query: search
    }, function (err, data) {


        if (err) {

            return console.log('Error occurred: ' + err);

        } else {
            var results = data.tracks.items
            for (i = 0; i < results.length; i++) {

                console.log("========================");
                console.log("Artist: " + results[i].artists[0].name);
                console.log("Song name: " + results[i].name);
                console.log("Album: " + results[i].album.name);
                console.log("Link to Spotify: " + results[i].external_urls.spotify);
            };
        };
    });
};

// "movie-this"
function movie() {
    var omdb = "https://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy"

    axios.get(omdb).then(
        function (response) {
            console.log("Title: " + response.data.Title);
            console.log("Release Year: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Produced in: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Cast: " + response.data.Actors);
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value)
        }
    )
}

// "do-what-it-says"

function read() {
    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
            return console.log(err);
        }
        var dataArr = data.split(",");
        console.log(dataArr);

        dataArr = [command, search];
    });
};

// switch case
switch (command) {
    case "concert-this":
        concert();
        break;
    case "spotify-this-song":
        if (!search) {
            search = "i want it that way"

        }
        song();
        break;
    case "movie-this":
        if (!search) {
            search = "jaws"

        }
        console.log(search)
        movie();
        break;
    case "do-what-it-says":
        read();
        break;
}