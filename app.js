var Discord = require('discord.js');
var client = new Discord.Client();
var auth = rquire('auth.json');

client.on("!help", function(message) {
    if (message.content === "ping") {
        message.reply('nothing');
    }
});

client.on("!help", function(message) {
    if (message.content === "ping") {
        message.reply('nothing');
    }
});

client.login(auth.token);