var Discord = require('discord.js');
var client = new Discord.Client();


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
    var auth = require('./auth.json');
    client.login(auth.token);
}
