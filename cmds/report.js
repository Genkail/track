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

    message.channel.send(embed).then(msg => msg.delete());

    let okaydm = new Discord.RichEmbed()
        .setColor('#800080')
        .addField(`Совсем скоро администрация нашего сервера, рассмотрит жалобу на`, `${rUser.user.tag}`)
        message.channel.send(okaydm).then(msg => msg.delete(20*1000));
    
        let reportschannel = message.guild.channels.find(c => c.id = '577793426029019147');
    if(!reportschannel) return message.channel.send("Не удалось найти канал для отчетов");


    message.delete().catch(O_o=>{});
    reportschannel.send(embed);

}

module.exports.help = {
  name: "report",
  aliases: []
}
