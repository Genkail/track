
const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    try{
      
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("У вас нет прав");
    let rUser = message.mentions.members.first();
    if(!rUser) return message.channel.send("Вы не указали пользователя");
    let embed = new Discord.RichEmbed()
    .setDescription("Бан")
    .setColor('#e22216')
    .addField("Администратор",message.author.username)
    .addField("Забанил",`${rUser.user.username}`);
    
    message.guild.member(rUser).ban("Бан");
    message.channel.send(embed);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "ban"
}