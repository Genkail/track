const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

    if(!args[0]) return bot.send("Вы не указали Ведущего");
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Не удалось найти пользователя.");
    let rreason = args.join(" ").slice(22);
    if(!rreason) return message.channel.send("вы не указали Код");


    let embed = new Discord.RichEmbed()
    .setColor('#800080')
    .setTitle('**ВЫЖИТЬ В ИНТЕРНЕТЕ**')
    .addField("Ведущий", `${rUser}`)

    .setDescription("<#577809039308881930>\nЭто комедийная игра  в которой вы кучей разных способов сможете манипулировать мнениями своих друзей! Как можно догадаться из названия, действие происходит в нашем собственном маленьком интернете.\nСайт для игры https://jackbox.fun \nСобираемся тут https://discord.gg/JsZUuGn (P.S позже перейдем в лс звонок)")
    .addField("Код для участия", rreason)
    .setImage("https://jackbox.whatif.one/wp-content/uploads/2017/08/STILogo-750x410.jpg")

let rpchannel = message.guild.channels.find('name', '🎉ивенты')
if(!rpchannel) return message.channel.send("Не удалось найти канал");
rpchannel.send(embed)

}

module.exports.help = {
  name: "se",
  aliases: []
}
