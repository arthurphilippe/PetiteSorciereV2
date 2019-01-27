module.exports = (message) => {
    message.channel.send({embed: {
        color: message.member.displayColor,
        title: "Commandes du bot",
        fields: [
            { name: "Commandes actives", value: "!ping\n!guilde\n!tankrose\n!bip\n!idole\n!planning\n!roll\n!addbirthday jour/mois\n!helpbirthday\n!suggestion [contenu]\n!randpeople [phrase]", inline: true},
            { name: "Work in progress, non-actives", value: "mybirthday\nbirthday\npipou\nchoose\nclash", inline: true},
            { name: "Contact", value: "Vous pouvez aussi contacter @Kiruan#0011 pour toutes informations ou suggestions", inline: true}
        ]
        }
    });
    console.log("help " + message.member.user.tag);
}