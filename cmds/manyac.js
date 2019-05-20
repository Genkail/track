const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

    if(!args[0]) return bot.send("Вы не указали Ведущего");
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Не удалось найти пользователя.");
    
    let time = args.slice(1).join(" ");
    if(!time) return message.channel.send("вы не указали время");


    let embed = new Discord.RichEmbed()
    .setColor('#800080')
    .setTitle('**МАНЬЯК**')
    .addField("Начало в:",time)
    .addField("Ведущий", `${rUser}`)
    
    .setDescription("**Задача Маньяка**: найти всех __до__ истечения времени!\n**Задача жертв**: ВЫЖИТЬ!.\n<@&578944823302815745>\nИграем в локальном лобби \nКомната ивента https://discord.gg/sG4yTrj")
   
    .setImage("https://i.ytimg.com/vi/cQvFG3L2lDU/maxresdefault.jpg")

let rpchannel = message.guild.channels.find('name', '🎉ивенты')
if(!rpchannel) return message.channel.send("Не удалось найти канал");
rpchannel.send(embed)

}

module.exports.help = {
  name: "mancs",
  aliases: []
}
