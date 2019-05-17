const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

    if(!args[0]) return bot.send("Вы не указали Ведущего");
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Не удалось найти пользователя.");
    
    let time = args.slice(1).join(" ");
    if(!time) return message.channel.send("вы не указали время");


    let embed = new Discord.RichEmbed()
    .setColor('#800080')
    .setTitle('**БРЕДОВУХА**')
    .addField("Начало в:",time)
    .addField("Ведущий", `${rUser}`)
    
    .setDescription("Монополия... будь монополистом! cоздай свою империю...и сломай ее тут же.\nСайт для игры monopoly-one.com \nКомната ивента https://discord.gg/bUkp9zU (P.S позже перейдем в лс звонок)")
   
    .setImage("https://thumbs.gfycat.com/ConventionalDifficultCottontail-size_restricted.gif")

let rpchannel = message.guild.channels.find('name', '🎉ивенты')
if(!rpchannel) return message.channel.send("Не удалось найти канал");
rpchannel.send(embed)

}

module.exports.help = {
  name: "mono",
  aliases: []
}
