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
    .setTitle('**Новости**')
    .addField("**Добавлено:**")
    .setDescription("\n1. Роль <@&578944823302815745> (Эти люди будут получать уведомление об ивентах\n2. Команда !роль (для получения <@&578944823302815745>. что бы удалить роль - напишите эту команду еще раз.\n)"
    .addField("**Изменено**")
    .setDescription("1. Система уведомлений на сервере. теперь вы будете получать уведомления только если вас упомянули/n/n<@&578979559748403236>")
    
let rpchannel = message.guild.channels.find('name', '👑cекретка')
if(!rpchannel) return message.channel.send("Не удалось найти канал");
rpchannel.send(embed)

}

module.exports.help = {
  name: "news",
  aliases: []
}
