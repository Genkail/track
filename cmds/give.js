const db = require('quick.db');

exports.run = async (bot, message, args, tools) => {

    
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!args[0]) return bot.send("Вы не указали пользователя");
    if(!rUser) return bot.send("Пользователь не найден");
    if(!args[1]) return bot.send("Укажите количество коинов");
    

    let balance = await db.fetch(`user.balance_${rUser.id}`);
    let authorbalance = await db.fetch(`user.balance_${message.author.id}`);
    if (args[1]> authorbalance) return bot.send("У вас недостаточно <:ros:512226123485020162>");
    if (args[1] < 1) return bot.send ("укажите число больше 0");
    if (args[0] == message.author) return bot.send ("нельзя передавать самому себе!")

if (args[1].replace(/\s/g, '').length === 0 || isNaN(args[1])) return bot.send('Укажите число!');

    
    message.channel.send(`${message.author} передал  игроку ${rUser} **${args[1]}<:ros:512226123485020162>**`)
    db.subtract(`user.balance_${message.author.id}`, args[1]);
    db.add(`user.balance_${rUser.id}`, args[1]);
}

module.exports.help = {
    name: "give"
};