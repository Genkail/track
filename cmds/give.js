const db = require('quick.db');

exports.run = async (bot, message, args, tools) => {

    if(message.author.id !== "267967915855314944") return message.channel.send("У вас нет прав");
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!args[0]) return bot.send("Вы не указали пользователя");
    if(!rUser) return bot.send("Пользователь не найден");
    if(!args[1]) return bot.send("Укажите количество коинов");
    

    let balance = await db.fetch(`user.balance_${rUser.id}`);

    
    message.channel.send(`Игроку ${rUser} добавлено **${args[1]}<:ros:512226123485020162>**`)
    db.add(`user.balance_${rUser.id}`, args[1]);
}

module.exports.help = {
    name: "give"
};