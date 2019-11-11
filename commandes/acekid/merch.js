module.exports = (message) => {
    message.channel.send("Les T-shirts & pulls imprimés chaton sont disponibles ici ! <https://teespring.com/stores/acekidprod>");
    message.channel.send({files: ["./media/merch.png"]});
}