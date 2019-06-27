const db = require('quick.db');
const Discord = require('discord.js');

exports.run = async (bot, message, args, tools) => {

    let user = message.mentions.users.first() || message.author;
           let xp = await db.fetch(`xp_${user.id}`); 
  let level = await db.fetch(`lvl_${user.id}`);
  console.log(xp);
        if (xp >= level * 50) { 
    
            bot.send(`Игрок ${message.author} повысил свой уровень до ${level + 1}`);
          
            db.subtract(`xp_${message.author.id}`,level * 50);
            db.add(`lvl_${message.author.id}`, 1);
            db.add(`up_${message.author.id}`, 1);
       };
    }


module.exports.help = {
    name: "fix"
};