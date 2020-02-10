module.exports = (message, prefix, bot) => {
    var date = new Date();
    var today = date.getTime();

    var timeThs = 1575412980000;
    
    var inbetweenSecondes = today - timeThs;
    var inbetweenDays = inbetweenSecondes / 86400000;
    inbetweenDays = inbetweenDays.toFixed(2);

    console.log(message.channel.id);
    //bot.channel.get("489766125580845056").send("Depuis le début de ton THS le 3 décembre 2019, il s'est écoulé " + inbetweenDays + "jours, soit X ans, X mois et X jours.");
}