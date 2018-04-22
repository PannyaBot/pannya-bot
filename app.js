var Discord = require('discord.js');
var client = new Discord.Client();
var request = require("request");

if (process.env.NODE_ENV === "production") {
    var discordToken = process.env.DISCORD_TOKEN;
    var giphyKey = process.env.GIPHY_KEY;
    var tenorKey = process.env.TENOR_KEY;
} else {
    var auth = require('./auth.json');
    var discordToken = auth.token;
    var giphyKey = auth.giphyKey;
    var tenorKey = auth.tenorKey;
}

client.on("message", function(message) {
    // if (message.content === "+loli") {
    //     var query = "anime";
    //     request('https://api.giphy.com/v1/gifs/search?api_key=' + giphyKey + "&q=" + query + "&limit=10000", function(err, res, body) {
    //         var gifs = JSON.parse(body).data;

    //         // var filteredGifs = [];
    //         // for (var g = 0; g < gifs.length; g++) {
    //         //     if (gifs[g].title.includes("loli") && gifs[g].title.includes("kiss")) {
    //         //         filteredGifs.push(gifs[g]);
    //         //     }
    //         // }
    //         var count = gifs.length;
    //         console.log(count);
    //         // var filteredCount = filteredGifs.length;
    //         // console.log(filteredCount);
    //         var rand = Math.floor(Math.random() * count);
    //         var url = gifs.url;
    //         message.reply(url);
    //     });
    // }
    if (message.content[0] === "+") {
        var query = "anime " + message.content.replace("+", "");
        request('https://api.tenor.com/v1/random?key=' + tenorKey + "&q=" + query + "&limit=50", function(err, res, body) {
            var gifs = JSON.parse(body).results;
            var count = gifs.length;
            if (count > 0) {
                var rand = Math.floor(Math.random() * count);
                var url = gifs[rand].url;
                message.reply(url);      
            }
        });
    }
    // if (message.content === "+loli") {
    //     var query = "anime loli";
    //     request('https://api.tenor.com/v1/random?key=' + tenorKey + "&q=" + query + "&limit=50", function(err, res, body) {
    //         var gifs = JSON.parse(body).results;
    //         // var filteredGifs = [];
    //         // for (var g = 0; g < gifs.length; g++) {
    //         //     if (gifs[g].title.includes("loli") && gifs[g].title.includes("kiss")) {
    //         //         filteredGifs.push(gifs[g]);
    //         //     }
    //         // }
    //         var count = gifs.length;
    //         console.log(count);
    //         // var filteredCount = filteredGifs.length;
    //         // console.log(filteredCount);
    //         var rand = Math.floor(Math.random() * count);
    //         var url = gifs[rand].url;
    //         console.log(gifs[rand]);
    //         message.reply(url);
    //     });
    // }
});

// client.on("message", function(message) {
//     if (message.content === "ping") {
//         message.reply('nothing');
//     }
// });

client.login(discordToken);

if (process.env.NODE_ENV === "production") {
    client.login(process.env.DISCORD_TOKEN);
} else {
    var auth = require('./auth.json');
    client.login(auth.token);
}

setInterval(function () {
    request('https://pannya-bot.herokuapp.com/', function (error, response, body) {
    });
}, 1000 * 60 * 13);
