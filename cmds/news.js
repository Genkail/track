const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    





    let embed = new Discord.RichEmbed()
    .setColor('#800080')
    .setTitle('**Новости**')
    .addField("**Добавлено:**")
    .setDescription("\n1. Роль <@&578944823302815745> (Эти люди будут получать уведомление об ивентах\n2. Команда !роль (для получения <@&578944823302815745>. что бы удалить роль - напишите эту команду еще раз.\n\n**Изменено:**\n1. Система уведомлений на сервере. теперь вы будете получать уведомления только если вас упомянули/n/n<@&578979559748403236>")
    

    
let rpchannel = message.guild.channels.find('name', '👑cекретка')
if(!rpchannel) return message.channel.send("Не удалось найти канал");
rpchannel.send(embed)

}

module.exports.help = {
  name: "news",
  aliases: []
}
