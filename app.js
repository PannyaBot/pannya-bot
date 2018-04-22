var Discord = require('discord.js');
var client = new Discord.Client();
var request = require("request");

client.on("message", function(message) {
    if (message.content === "ping") {
        message.reply('nothing');
    }
});

// client.on("message", function(message) {
//     if (message.content === "ping") {
//         message.reply('nothing');
//     }
// });

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
