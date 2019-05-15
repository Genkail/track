const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
   if(!args[0]) return bot.send("Вы не указали пользователя");
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Не удалось найти пользователя.");
    let rreason = args.join(" ").slice(22);
    if(!rreason) return message.channel.send("Введите причину");

    let embed = new Discord.RichEmbed()
    .setColor('#800080')
    .addField("📕Жалоба на", `${rUser} with ID: ${rUser.id}`)
    .addField("📝Жалоба от", `${message.author} with ID: ${message.author.id}`)
    .addField("📢Канал", message.channel)
    .addField("📄Причина", rreason)

    let okaydm = new Discord.RichEmbed()
        .setColor('#800080')
        .addField(`Совсем скоро администрация нашего сервера, рассмотрит жалобу на`, `${rUser.user.tag}`)
        message.channel.send(okaydm)
let rpchannel = message.guild.channels.find('name', 'жалобы')
if(!rpchannel) return message.channel.send("Не удалось найти канал для отчетов");
rpchannel.send(embed)

}

module.exports.help = {
  name: "report",
  aliases: []
}
