module.exports = (message) => {
    say = message.split(5);
    message.channel.send(say);
    console.log("say " + message.member.user.tag + " " + say);
}