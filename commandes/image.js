module.exports = (message, prefix) => {
    if(message.content.startsWith(prefix + "cheh")){
        message.channel.send({files: ["./media/cheh.jpg"]});
    }
    if(message.content.startsWith(prefix + "nyx")){
        number = 12;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send({files: ["./media/nyx/" + imageNumber + ".jpg"]});
    }
    if(message.content.startsWith(prefix + "mercé")){
        message.channel.send({files: ["./media/mercé.jpg"]});
    }
    if(message.content.startsWith(prefix + "mignon")){
        number = 39;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send({files: ["./media/bebeanimaux/" + imageNumber + ".png"]});
    }
    if(message.content.startsWith(prefix + "malo")){
        number = 32;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send({files: ["./media/malo/" + imageNumber + ".png"]});
    }
    if(message.content.startsWith(prefix + "kouzia")){
        number = 52;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send({files: ["./media/kouzia/" + imageNumber + ".png"]});
    }
    if(message.content.startsWith(prefix + "gashina")){
        message.channel.send({files: ["./media/gashina.png"]});
    }
    if(message.content.startsWith(prefix + "motivation")){
        number = 80;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send({files: ["./media/motivation/" + imageNumber + ".png"]});
    }
    if(message.content.startsWith(prefix + "gaki")){
        number = 45;
        imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        message.channel.send({ files: ["./media/gaki/" + imageNumber + ".png"]});
    }
    if(message.content.startsWith(prefix + "lisa")){
        number = 35;
        imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        message.channel.send({ files: ["./media/lisa/" + imageNumber + ".jpg"]});
    }
    if(message.content.startsWith(prefix + "mm")){
        number = 108;
        imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        message.channel.send({ files: ["./media/mm/Morning Musume " + imageNumber + ".jpg"]});
    }
    if(message.content.startsWith(prefix + "yes")){
        message.channel.send({ files: ["./media/yes.png"]});
    }
    if(message.content.startsWith(prefix + "brie")){
        number = 33;
        imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        message.channel.send({ files: ["./media/brie/" + imageNumber + ".jpg"]});
    }
    if(message.content.startsWith(prefix + "maria")){
        number = 12;
        imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        message.channel.send({files: ["./media/maria/" + imageNumber + ".png"]});
    }
    if(message.content.startsWith(prefix + "pipou")){
        number = 49;
        imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        message.channel.send({files: ["./media/pipou/" + imageNumber + ".jpg"]});
    }
    if(message.content.startsWith(prefix + "yeonwoo")){
        number = 101;
        imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        message.channel.send({files: ["./media/yeonwoo/" + imageNumber + ".jpg"]});
    }
    if(message.content.startsWith(prefix + "flouff")){
        number = 21;
        imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        message.channel.send({files: ["./media/flouff/" + imageNumber + ".jpg"]});
    }
    if(message.content.startsWith(prefix + "astra")){
        message.channel.send({ files: ["./media/astra.PNG"] });
    }
    if(message.content.startsWith(prefix + "julia")){
        number = 8;
        imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        message.channel.send({files: ["./media/julia/" + imageNumber + ".png"]});
    }
    if(message.content.startsWith(prefix + "blep")){
        number = 4;
        imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        message.channel.send({ files: ["./media/blep/" + imageNumber + ".jpg"] });
    }
    if(message.content.startsWith(prefix + "maimi")){
        number = 13;
        imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        message.channel.send({files: ["./media/maimi/" + imageNumber + ".jpg"]});
    }
    if(message.content.startsWith(prefix + "kae")){
        message.channel.send({ files: ["./media/kae.png"] });
    }
    if(message.content === (prefix + "jul")){
        message.channel.send({ files: ["./media/jul.gif"] });
    }
    if(message.content.startsWith(prefix + "mood")){
        number = 48;
        imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        message.channel.send({ files: ["./media/mood/" + imageNumber + ".png"]});
    }
    if(message.content.startsWith(prefix + "garou")){
        message.channel.send({ files: ["./media/garou.png"] });
    }
    if(message.content.startsWith(prefix + "judging")){
        message.channel.send({ files: ["./media/judging.jpg"]});
    }
    if(message.content.startsWith(prefix + "content")){
        message.channel.send({ files: ["./media/content.jpg"]});
    }
    if(message.content.startsWith(prefix + "bernadette")){
        message.channel.send({ files: ["./media/bernadette.png"]});
    }
    if(message.content.startsWith(prefix + "tartine")){
        message.channel.send({ files: ["./media/tartine.png"]});
    }
    if(message.content.startsWith(prefix + "courgette")){
        message.channel.send({ files: ["./media/courgette.gif"]});
    }
    if(message.content.startsWith(prefix + "riho")){
        number = 132;
        imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        message.channel.send({ files: ["./media/riho/" + imageNumber + ".jpg"]});
    }

    console.log(message.content + " " + message.member.user.tag + " " + message.channel.name);
}

/*
Formule pour image aléatoire

number = 108;
imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
message.channel.send({files: ["./media/mm/Morning Musume " + imageNumber + ".jpg"]});

*/