const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setDescription("Информация о сервере")
    .setColor('#10c7e2')
    .addField("Название сервера",message.guild.name,true)
    .addField("Создатель сервера",message.owner.username,true)
    .addField("Количество ролей",message.guild.roles.size,true)
    .addField("Количество ролей",message.guild.roles.size,true)
    .addField("Кол-Во участников",message.guild.memberCount)
    .addField("Регион",message.guild.region)
    .setThumbnail(message.guild.iconURL)

    bot.send(embed);

};
module.exports.help = {
    name: "serverinfo"
};
