//connexion aux modules
const Discord = require('discord.js');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('database.json');
const db = low(adapter);
const fs = require('fs');

//Global variables
let token = fs.readFileSync("Token_PetiteSorciere.txt", "UTF-8")  //process.env.token; 
var prefix = "!";
var bot = new Discord.Client();

//bootup
bot.on('ready', () => {
    console.log("Bot ready !");
    bot.user.setPresence({ game: { name: 'Tape !aled', type : 0}});
});
bot.login(token);
bot.on("message", message => {

    //import
    const help = require("./commands/help.js");

    //help
     if (message.startwith(prefix + "help")){
    help.run();
    }

});