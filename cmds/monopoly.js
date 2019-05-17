const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

    if(!args[0]) return bot.send("Вы не указали Ведущего");
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Не удалось найти пользователя.");
    
    let time = args.slice(2).join(" ");
    if(!time) return message.channel.send("вы не указали время");


    let embed = new Discord.RichEmbed()
    .setColor('#800080')
    .setTitle('**БРЕДОВУХА**')
    .addField("Начало в:",time)
    .addField("Ведущий", `${rUser}`)
    
    .setDescription("Монополия... будь монополистом! cоздай свою империю...и сломай ее тут же.\nСайт для игры monopoly-one.com \nСобираемся тут https://discord.gg/JsZUuGn (P.S позже перейдем в лс звонок)")
   
    .setImage("https://im0-tub-ru.yandex.net/i?id=98c1b1539b07ec7dc6f1a93dcc004f14&n=13")

let rpchannel = message.guild.channels.find('name', '🎉ивенты')
if(!rpchannel) return message.channel.send("Не удалось найти канал");
rpchannel.send(embed)

}

module.exports.help = {
  name: "mono",
  aliases: []
}
