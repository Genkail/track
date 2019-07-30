const Discord = require("discord.js");
const db = require('quick.db')
 
 
var sffr = [
  "0",
  "0",
  "0",
  "0",
  "0",
  "0",
  "0",
  "0",
  "0",
  "0",
  "0",
  "0",
  "100",
  "100",
  "100",
  "100",
  "100",
  "100",
  "100",
  "100"
  ];
 
exports.run = async (bot, message, args) => {
  message.delete()
 
   
    let a = message.author.id
  let b = db.fetch(`user.balance_${message.author.id}`) || 0
  if (!args[0]) {
        message.delete()
    message.channel.send(`**Укажите ставку**$`)
  } else {
    let sff = args[0]
    if (sff < 49) {
      message.channel.sendMessage("Ошибка! Твоя ставка меньше **50**!");
    } else {
      if (!sff < 49) {
        if (sff > b) {
          var embed = new Discord.RichEmbed()
            .addField("Ошибка","У тебя не хватает денег")
            .setColor('RANDOM')
           
          message.channel.send(embed)
          return
        }
        if ((b + 1) > sff) {
          sff = (sffr[Math.floor(Math.random() * sffr.length)]);
          if (sff > 50) {
            let d = args[0] / 1 * 1
            let s = parseInt(b) + parseInt(d)
            let f = message.member.displayName
            var winembed = new Discord.RichEmbed()
              .setColor('GREEN')
             
              .addField(`Вот это да! ${f}`, `Снимаю шляпу. Ты выиграл **${args[0] / 1 * 1}**<:ros:512226123485020162>`)
            .setThumbnail('https://images-ext-2.discordapp.net/external/PLhuwNoeyrQsTSywD58dSPWIqzq5gsr7mhzBfTb4KEI/https/i.imgur.com/fpzfvtr.gif')
           
            message.channel.send(winembed)
            db.set(`user.balance_${message.author.id}`, s)
            return
          }
          if (sff < 50) {
            let d = args[0] / 1
            let s = b - d
             let f = message.member.displayName
            var loseembed = new Discord.RichEmbed()
              .setColor('RED')
           
              .addField(`Блин, ${f}, кажется ты проиграл`, `-**${args[0]}**<:ros:512226123485020162>`)
            .setThumbnail('https://images-ext-2.discordapp.net/external/PLhuwNoeyrQsTSywD58dSPWIqzq5gsr7mhzBfTb4KEI/https/i.imgur.com/fpzfvtr.gif')
           
           
            message.channel.send(loseembed)
            db.set(`user.balance_${message.author.id}`, s)
            return
          }
        }
      }
    }
  }
}
module.exports.help = {
  name: "bet",
  category: '-',
  aliases: ['h']
};