module.exports = (message) => {    
    message.channel.send({embed: {
        color: message.member.displayColor,
        title: "Commandes du bot",
        fields: [
            { name: "Photos", value: "!cheh\n!malo\n!kouzia\n!mercé\n!tankrose\n!gaki\n!lisa\n!mm\n!maria\n!pipou\n!yeonwoo\n!flouff\n!astra\n!julia\n!blep\n!maimi\n!kae\n!jul\n!mood\n!garou\n!migon\n!nyx\n!gashina\n!motivation", inline: true},
        ]
        }
    });

    console.log(message.content + " " + message.member.user.tag + " " + message.channel.name);
}