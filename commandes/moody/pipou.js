module.exports = (message) => {
    bot.channels.get("351763894802317312").send("Bonjour les petits loups! Voici de la douceur pour bien commencer votre journée");
    number = 39;
    imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    bot.channels.get("351763894802317312").send({files: ["./media/bebeanimaux/" + imageNumber + ".png"]});
}