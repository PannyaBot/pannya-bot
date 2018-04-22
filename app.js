var Discord = require('discord.js');
var client = new Discord.Client();
var auth = require('./auth.json');

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

console.log("==========");
console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === "production") {
    console.log(process.env.DISCORD_TOKEN)
    client.login(process.env.DISCORD_TOKEN);
} else {
    client.login(auth.token);
}
