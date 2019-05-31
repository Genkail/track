const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

    if(!args[0]) return bot.send("Вы не указали Ведущего");
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Не удалось найти пользователя.");
    let cod = args[1]
    if(!cod) return message.channel.send("вы не указали Код");
    let time = args.slice(2).join(" ");
    if(!time) return message.channel.send("вы не указали время");


    let embed = new Discord.RichEmbed()
    .setColor('#800080')
    .setTitle('**КРОКОДИЛ**')
    .addField("Начало в:",time)
    .addField("Ведущий", `${rUser}`)
    
    .setDescription("Крокодил это игра в которой ваша задача угадать что рисует другой игрок.\nСобираемся тут https://discord.gg/JsZUuGn ")
    .addField("Сайт для игры", cod)
    .setImage("https://3.bp.blogspot.com/-ZBLay50WF98/WIhTkfFP7mI/AAAAAAAACo4/GA9B-pb9m9YZGVA0V48Wa5VnRc6ygIjxgCLcB/s320/tumblr_njxklrgHRH1swwiquo1_500.gif")

let rpchannel = message.guild.channels.find('name', '🎉ивенты')
if(!rpchannel) return message.channel.send("Не удалось найти канал");
rpchannel.send(embed)

}

module.exports.help = {
  name: "croko",
  aliases: []
}
