const Discord = require('discord.js');
var bot = new Discord.Client();

module.exports = (bot, message, prefix) => {
    var question = message.content.split("?").shift();
    question = question.substr(6);
    question = question + " ?";
    console.log ("Question : (" + question + ")");

    var choix =  message.content.substr(question.length + 5).split(";");
    var choix1 = choix[0];
    var choix2 = choix[1];
    var choix3 = choix[2];
    var choix4 = choix[3];

    message.channel.send({embed: {
        color: message.member.displayColor,
        title: message.member.displayName + ' a créé ce sondage',
        fields: [
            { name: question, value: "🥚 "+choix1+"\n<:tankrose:557930047760236544> "+choix2+" \n🇶 "+choix3+"\n<:dab:557930047701385231> "+choix4},
        ]
        }
    }).then(() => {
        let lastmessage = bot.user.lastMessage;
        lastmessage.react("🥚"); 
        lastmessage.react("557930047760236544");
        lastmessage.react("🇶"); 
        lastmessage.react("557930047701385231");
    });
}


/*
émotes : Q tankrose dab et oeuf
1 : 🥚
2 : <:tankrose:557930047760236544>
3 : 🇶
4 : <:dab:557930047701385231>   
*/