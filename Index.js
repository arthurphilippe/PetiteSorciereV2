//Modules
const fs = require('fs');

//Global variables
let token = fs.readFileSync("Token_PetiteSorciere.txt", "UTF-8")  //process.env.token; 

bot.login(token);

bot.on("message", message => {
    //import
    const help = require("./commands/help.js");
    help.run(message);

});