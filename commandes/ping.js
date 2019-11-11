module.exports = (message, bot) => {
    message.channel.send("pong");
    message.react("517050403146170369");
    console.log(
    "ping pong" + message.member.user.tag + "/" + message.channel.name
    );
    bot.channels.get("416194652744450050").send(" ");
}