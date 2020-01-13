//discord bot
const Discord = require('discord.js');
const fs = require('fs');
var schedule = require('node-schedule');
//const token = fs.readFileSync("Token_PetiteSorciere.txt", "UTF-8");
const token = "NDg5NzU2MTA3ODc1NjgwMjU2.XaMRJQ.5FenXypp7n-i6j-nmyLfPoomFZs";

//commandes
const tag = require("./commandes/acekid/tag.js");
const say = require("./commandes/say.js");
const pipouMoody = require("./commandes/moody/pipou.js");
const calin = require("./commandes/moody/calin.js");
const image = require("./commandes/image.js");
const poll = require("./commandes/poll.js");
const merch = require("./commandes/acekid/merch.js");
const ping = require("./commandes/ping");
const ac = require("./commandes/ac.js");

const help = require("./commandes/help/help.js");
const cmdPhoto = require("./commandes/help/cmdPhoto.js");
const cmdBonus = require("./commandes/help/cmdBonus.js");


const prefix = "!";

//Boot up
var bot = new Discord.Client();
bot.on('ready', () => {
    console.log("Bot v2 ready !");
    bot.user.setPresence({ game: { name: 'Tape !aled', type : 0}});
});
bot.login(token);

//automatisation
//moody
var rule = new schedule.RecurrenceRule();
rule.minute = 00;
rule.hour = 7;
var o = schedule.scheduleJob(rule, function(){
    bot.channels.get("351763894802317312").send("Bonjour les petits loups! Voici de la douceur pour bien commencer votre journée");
    number = 39;
    imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    bot.channels.get("351763894802317312").send({files: ["./media/bebeanimaux/" + imageNumber + ".png"]});
});

//acekid
var rule = new schedule.RecurrenceRule();
rule.minute = 00;
rule.hour = 8;
var o = schedule.scheduleJob(rule, function(){
    bot.channels.get("416194652744450050").send("Bonjour ! Voici de la douceur pour bien commencer votre journée");
    number = 80;
    imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    bot.channels.get("416194652744450050").send({files: ["./media/motivation/" + imageNumber + ".png"]});
});

//adding role
const events = {
	MESSAGE_REACTION_ADD: 'messageReactionAdd',
	MESSAGE_REACTION_REMOVE: 'messageReactionRemove',
};

bot.on('raw', async event => {
	if (!events.hasOwnProperty(event.t)) return;

	const { d: data } = event;
	const user = bot.users.get(data.user_id);
	const channel = bot.channels.get(data.channel_id) || await user.createDM();

	if (channel.messages.has(data.message_id)) return;

    const message = await channel.fetchMessage(data.message_id);

	const emojiKey = (data.emoji.id) ? `${data.emoji.name}:${data.emoji.id}` : data.emoji.name;
	let reaction = message.reactions.get(emojiKey);

	if (!reaction) {
		const emoji = new Discord.Emoji(bot.guilds.get(data.guild_id), data.emoji);
		reaction = new Discord.MessageReaction(message, emoji, 1, data.user_id === bot.user.id);
	}

	bot.emit(events[event.t], reaction, user, message);
});

bot.on('messageReactionAdd', (reaction, user) => {
    if(reaction.message.id === "606807344759963688"){
        if(reaction.emoji.name ==="🌻"){
            let role = reaction.message.guild.roles.find(r => r.name === "pronom : elle 🌻");
            let member = reaction.message.guild.members.get(user.id);
            member.addRole(role).catch(console.error);
            console.log(user.username + " s'est mit le role " + role);

        }
        if(reaction.emoji.name ==="🌸"){
            let role = reaction.message.guild.roles.find(r => r.name === "pronom : il 🌸");
            let member = reaction.message.guild.members.get(user.id);
            member.addRole(role).catch(console.error);
            console.log(user.username + " s'est mit le role " + role);
   
        }
        if(reaction.emoji.name ==="🍀"){
            let role = reaction.message.guild.roles.find(r => r.name === "pronom : iel 🍀");
            let member = reaction.message.guild.members.get(user.id);
            member.addRole(role).catch(console.error);
            console.log(user.username + " s'est mit le role " + role);
   
        }
        if(reaction.emoji.name ==="🌼"){
            let role = reaction.message.guild.roles.find(r => r.name === "pronom : ael 🌼");
            let member = reaction.message.guild.members.get(user.id);
            member.addRole(role).catch(console.error);
            console.log(user.username + " s'est mit le role " + role);
   
        }
    }
});

bot.on('messageReactionRemove', (reaction, user) => {
    if(reaction.message.id === "606807344759963688"){
        if(reaction.emoji.name ==="🌻"){
            let role = reaction.message.guild.roles.find(r => r.name === "pronom : elle 🌻");
            let member = reaction.message.guild.members.get(user.id);
            member.removeRole(role).catch(console.error);
            console.log(user.username + " s'est retiré le role " + role);   
        }
        if(reaction.emoji.name ==="🌸"){
            let role = reaction.message.guild.roles.find(r => r.name === "pronom : il 🌸");
            let member = reaction.message.guild.members.get(user.id);
            member.removeRole(role).catch(console.error);
            console.log(user.username + " s'est retiré le role " + role);   
        }
        if(reaction.emoji.name ==="🍀"){
            let role = reaction.message.guild.roles.find(r => r.name === "pronom : iel 🍀");
            let member = reaction.message.guild.members.get(user.id);
            member.removeRole(role).catch(console.error);
            console.log(user.username + " s'est retiré le role " + role);   
        }
        if(reaction.emoji.name ==="🌼"){
            let role = reaction.message.guild.roles.find(r => r.name === "pronom : ael 🌼");
            let member = reaction.message.guild.members.get(user.id);
            member.removeRole(role).catch(console.error);
            console.log(user.username + " s'est retiré le role " + role);   
        }
    }
});

bot.on("message", message => {
    
    //help
    if(message.content.startsWith(prefix + "help"          )){help(message);}
    if(message.content.startsWith(prefix + "aled"          )){help(message);}
    if(message.content.startsWith(prefix + "commandes"     )){help(message);}
    if(message.content.startsWith(prefix + "cmdphoto"      )){cmdPhoto(message);}
    if(message.content.startsWith(prefix + "cmdbonus"      )){cmdBonus(message);}
    
    
    //moi uniquement
    if(message.content.startsWith(prefix + "say"           )){say(message);}
    
    //général
    if(message.content.startsWith(prefix + "cheh"          )){image(message, prefix);}
    if(message.content.startsWith(prefix + "malo"          )){image(message, prefix);}
    if(message.content.startsWith(prefix + "kouzia"        )){image(message, prefix);}
    if(message.content.startsWith(prefix + "mercé"         )){image(message, prefix);}
    if(message.content.startsWith(prefix + "motivation"    )){image(message, prefix);}
    if(message.content.startsWith(prefix + "gaki"          )){image(message, prefix);}
    if(message.content.startsWith(prefix + "lisa"          )){image(message, prefix);}
    if(message.content.startsWith(prefix + "mm"            )){image(message, prefix);}
    if(message.content.startsWith(prefix + "pipou"         )){image(message, prefix);}
    if(message.content.startsWith(prefix + "yeonwoo"       )){image(message, prefix);}
    if(message.content.startsWith(prefix + "astra"         )){image(message, prefix);}
    if(message.content.startsWith(prefix + "julia"         )){image(message, prefix);}
    if(message.content.startsWith(prefix + "blep"          )){image(message, prefix);}
    if(message.content.startsWith(prefix + "maimi"         )){image(message, prefix);}
    if(message.content.startsWith(prefix + "garou"         )){image(message, prefix);}
    if(message.content.startsWith(prefix + "brie"          )){image(message, prefix);}
    if(message.content.startsWith(prefix + "maria"         )){image(message, prefix);}
    if(message.content.startsWith(prefix + "yeonwoo"       )){image(message, prefix);}
    if(message.content.startsWith(prefix + "flouff"        )){image(message, prefix);}
    if(message.content.startsWith(prefix + "blep"          )){image(message, prefix);}
    if(message.content.startsWith(prefix + "kae"           )){image(message, prefix);}
    if(message.content.startsWith(prefix + "mood"          )){image(message, prefix);}
    if(message.content.startsWith(prefix + "content"       )){image(message, prefix);}
    if(message.content.startsWith(prefix + "bernadette"    )){image(message, prefix);}
    if(message.content.startsWith(prefix + "judging"       )){image(message, prefix);}
    if(message.content ===       (prefix + "jul"           )){image(message, prefix);}
    if(message.content.startsWith(prefix + "tartine"       )){image(message, prefix);}
    if(message.content.startsWith(prefix + "courgette"     )){image(message, prefix);}
    if(message.content.startsWith(prefix + "riho"          )){image(message, prefix);}


    if(message.content.startsWith(prefix + "ac"            )){ac(message, prefix);}
    if(message.content.startsWith(prefix + "poll"          )){poll(bot, message, prefix);}
    if(message.content.startsWith(prefix + "ping"          )){ping(message, bot);}
    
    //softban
    //if(message.member.roles.has(sofbanRole.id)){message.delete();}
    //const sofbanRole = message.guild.roles.find("name", "softban");
    
    
    //acekid
    if(message.guild.id === "416194652744450048" || message.guild.id === "454702934463217674"){
        //automatisation
        //if (message.mentions.users.first()){tag(message);}
        
        //commandes
        if(message.content.startsWith(prefix + "calin"         )){calin(message)};
        if(message.content.startsWith(prefix + "gashina"       )){image(message)};
        if(message.content.startsWith(prefix + "yes"           )){image(message, prefix);}
        if(message.content.startsWith(prefix + "merch"         )){merch(message)};
    }
    
    //moody
    if(message.guild.id === "351763893867249665" || message.guild.id === "454702934463217674"){
        //automatisation
        
        //commandes
        if(message.content.startsWith(prefix + "calin"         )){calin(message);}
        if(message.content.startsWith(prefix + "nyx"           )){image(message, prefix);}
        if(message.content.startsWith(prefix + "mignon"        )){image(message, prefix);}
    }
    
    //uniquement Kiruan - perso
    if(message.guild.id === "454702934463217674"){
        
    }
});

//TODO - dans tag.js, bot is not defined pour écrire dans le channel
