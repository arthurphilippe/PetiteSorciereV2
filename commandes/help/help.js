module.exports = (message) => {
    message.channel.send({embed: {
        color: message.member.displayColor,
        title: "Commandes du bot",
        fields: [
            { name: "Commandes", value: "!ping\n!oui\n!bip\n!guilde\n!roll\n!suggestion\n!calin", inline: true},
            { name: "Aides", value: "!aled\n!help\n!commandes\n\n!idoles\n!cmdphoto\ncmdbonus", inline: true},
            { name: "Contact", value: "Vous pouvez aussi contacter @Kiruan#0011 pour toutes informations ou suggestions", inline: true}
        ]
        }
    });

    console.log(message.content + " " + message.member.user.tag + " " + message.channel.name);
}

