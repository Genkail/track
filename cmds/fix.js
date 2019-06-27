const db = require('quick.db');
const Discord = require('discord.js');

exports.run = async (bot, message, args, tools) => {
         let xp = await db.fetch(`xp_${message.author.id}`); 
  let level = await db.fetch(`lvl_${message.author.id}`);
    let user = message.mentions.users.first() || message.author;
        if (xp  >= (level * 50)) { 
    
            bot.send(`Игрок ${message.author} повысил свой уровень до ${level + 1}`);
          
            db.subtract(`xp_${message.author.id}`,level * 50);
            db.add(`lvl_${message.author.id}`, 1);
            db.add(`up_${message.author.id}`, 1);
       };
    }


module.exports.help = {
    name: "fix"
};