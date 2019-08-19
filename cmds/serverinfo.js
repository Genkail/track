const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setDescription("Информация о сервере")
    .setColor('#10c7e2')
    .addField("Название сервера",message.guild.name,true)
    .addField("Создатель сервера",message.owner.username,true)
    .addField("Количество ролей",message.guild.roles.size,true)
    .addField("Количество ролей",message.guild.emojis.size,true)
    .addField(`Кол-Во участников :${message.guild.memberCount}`,`>>> Людей: ${message.guild.members.filter(mem => !mem.user.bot).size}\nБотов:${message.guild.members.filter(mem => !mem.user.bot).size}\nОнлайн:${message.guild.members.filter(m => m.presence.status === "online").size}\n `)
    .addField("Регион",message.guild.region)
    .setThumbnail(message.guild.iconURL)

    bot.send(embed);

};
module.exports.help = {
    name: "serverinfo"
};
