const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

    if(!args[0]) return bot.send("Вы не указали Ведущего");
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Не удалось найти пользователя.");
    let rreason = args.join(" ").slice(22);
    if(!rreason) return message.channel.send("вы не указали Код");


    let embed = new Discord.RichEmbed()
    .setColor('#800080')
    .setTitle('**БРЕДОВУХА**')
    .addField("Ведущий", `${rUser}`)

    .setDescription("Игра, в которой надо придумывать ложные варианты ответа и одновременно искать правдивые.\nСайт для игры https://jackbox.fun \nСобираемся тут https://discord.gg/JsZUuGn (P.S позже перейдем в лс звонок)")
    .addField("Код для участия", rreason)
    .setImage("https://jackbox.whatif.one/wp-content/uploads/2017/12/FibbageEAY_logo_post-750x410.jpg")

let rpchannel = message.guild.channels.find('name', '🎉ивенты')
if(!rpchannel) return message.channel.send("Не удалось найти канал");
rpchannel.send(embed)

}

module.exports.help = {
  name: "bred",
  aliases: []
}
