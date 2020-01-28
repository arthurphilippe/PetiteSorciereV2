module.exports = (message, prefix) => {
    var date = new Date();
    var today = date.getTime();
    var timeAc = 1584662460000;
    var inbetweenSecondes = timeAc - today;
    var inbetweenDays = inbetweenSecondes / 86400000;
    inbetweenDays = inbetweenDays.toFixed(2);

    message.channel.send("Il reste " + inbetweenDays + " jours avant AC:NH");
}