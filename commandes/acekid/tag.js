module.exports = (message) => {
    if(message.author.id != "159985870458322944"){
        message.react("🤖");
        message.react("❌");
        message.react("😠");
        console.log("tag interdit " + message.member.user.tag + " dans le channel " + message.channel.name);
        //crash le bot
        //bot.channels.get("454708316887580718").send(message.member.user.tag + " a tag quelqu'un sur le channel " + message.channel.name + " :angry:");
        message.channel.send("interdiction de taguer des personnes avec des @ dans vos messages. On a eu des gros problèmes de spam avec ça donc on l'a interdit et on est TRES STRICT là-dessus.");
    }else{
        message.react("♥");
        message.react("👍");
        message.react("517055421811392512");
        console.log("lvl up dans le channel " + message.channel.name);
    }
}

