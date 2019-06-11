const db = require('quick.db');

exports.run = async (bot, message, args, tools) => {

    let user = message.mentions.users.first() || message.author;
    

    let balance = await db.fetch(`user.balance_${user.id}`);

    if (balance == null) balance = 0;

    message.channel.send(`<@${user.id}> - Баланс : **${Math.floor(balance)}**<:ros:512226123485020162>`)
}

module.exports.help = {
    name: "bal"
};