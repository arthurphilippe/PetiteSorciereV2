module.exports = (message) => {    
    message.channel.send({embed: {
        color: message.member.displayColor,
        title: "Commandes du bot",
        fields: [
            { name: "Bonus", value: "!aled\n!ping\n!oui\n!bip\n!guilde\n!roll\n!planning\n!suggestion\n!randpeople\n!addbirthday\n!calin", inline: true},
        ]
        }
    });

    console.log(message.content + " " + message.member.user.tag + " " + message.channel.name);
}

