module.exports = (message) => {
    let caliné = message.content.substr(6);
    if(message.mentions.users.first()){
        let calinéTagé = message.mentions.users.first().displayName;
        message.channel.send(message.member.displayName + " lance des calins sur " + calinéTagé + " :heart:");
        console.log(message.member.user.tag + " lance des calins sur " + calinéTagé + " dans le channel " + message.channel.name);
    }
    else if(caliné !== null && caliné !== ''){
        message.channel.send(message.member.displayName + " lance des calins sur" + caliné + " :heart:");
        console.log(message.member.user.tag + " lance des calins sur " + caliné + " dans le channel " + message.channel.name);
    }
    else{
        message.channel.send(message.member.displayName + " lance des calins :heart:");
        console.log(message.member.user.tag + " lance des calins dans le channel " + message.channel.name);
    }
}