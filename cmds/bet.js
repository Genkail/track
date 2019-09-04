const Discord = require("discord.js");
const db = require('quick.db') 

exports.run = async (bot, message, args) => {
  message.delete()
 
   
    let a = message.author.id
  let b = db.fetch(`coins.${message.guild.id}.${message.author.id}`) || 0
  if (!args[0]) return message.channel.send(`**Укажите ставку**$`)   
    let sff = args[0]
    if (sff < 49) return  message.channel.sendMessage("Ошибка! Твоя ставка меньше **50**!");
       if (sff > b)  return message.channel.send(new Discord.RichEmbed().addField("Ошибка","У тебя не хватает денег").setColor('RANDOM'))
          sff = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
          if (sff >=49 ) {
            let d = args[0] / 1 * 1
            let s = parseInt(b) + parseInt(d)
            let f = message.member.displayName           
            message.channel.send(new Discord.RichEmbed().setColor('GREEN').addField(`Вот это да! ${f}`, `Снимаю шляпу. Ты выиграл **${args[0] / 1 * 1}**<:ros:512226123485020162>`).setThumbnail('https://images-ext-2.discordapp.net/external/PLhuwNoeyrQsTSywD58dSPWIqzq5gsr7mhzBfTb4KEI/https/i.imgur.com/fpzfvtr.gif'))
            db.set(`coins.${message.guild.id}.${message.author.id}`, s)
          }
          if (sff < 50) {
            let d = args[0] / 1
            let s = b - d
             let f = message.member.displayName
message.channel.send(new Discord.RichEmbed().setColor('RED').addField(`Блин, ${f}, кажется ты проиграл`, `-**${args[0]}**<:ros:512226123485020162>`).setThumbnail('https://images-ext-2.discordapp.net/external/PLhuwNoeyrQsTSywD58dSPWIqzq5gsr7mhzBfTb4KEI/https/i.imgur.com/fpzfvtr.gif'))
            db.set(`coins.${message.guild.id}.${message.author.id}`, s)      
          }
        
      
    
}

module.exports.help = {
  name: "bet",
  category: '-',
  aliases: ['h']
};