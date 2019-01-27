const Discord = require('discord.js');
const help = require("./commandes/help.js");
const fs = require('fs');

const token = fs.readFileSync("Token_PetiteSorciere.txt", "UTF-8");


//Boot up
var bot = new Discord.Client();
bot.on('ready', () => {
    console.log("Bot v2 ready !");
    bot.user.setPresence({ game: { name: 'Tape !aled', type : 0}});
});
bot.login(token);

bot.on("message", message => {
    
    //Help
    if (message.content === "help"){
        help(message);
    }


    //automatisation acekid
    if(message.guild.id === "416194652744450048" || message.guild.id === "454702934463217674"){
        if (message.mentions.users.first()){
            
    }
});