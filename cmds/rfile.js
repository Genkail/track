const Discord = module.require('discord.js');
let config = require('../botconfig.json');
let fs = require('fs');
let prefix = config.prefix;

module.exports.run = async (bot, message, args) => {
    try {
        let embed = new Discord.RichEmbed();
        if (!message.author.id == 428464195458170881) return message.channel.send("У вас нет прав");
        fs.readFile(args[0], "utf-8", function (err,data) {
            if(err) console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
            message.channel.send(data, {
                code: 'md'
            });
        });
    } catch(err) {
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }
};

module.exports.help = {
    name: "rfile"
};