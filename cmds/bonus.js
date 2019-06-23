const db = require('quick.db'),
      ms = require('parse-ms');

      exports.run = async (bot, message, args, tools) => {

        let cooldown = 8.64e+7,
        amount = 500;

        let lastDaily = await db.fetch(`lastDaily_${message.author.id}`);

        if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
            let timeObj = ms(cooldown - (Date.now() - lastDaily));

            message.channel.send(`Ты уже получил награду, подожди еще **${timeObj.hours}ч ${timeObj.minutes} м**`);

        } else {message.channel.send(`Ты успешно получил **${amount}**<:ros:512226123485020162>`);

        db.set(`lastDaily_${message.author.id}`, Date.now());
        db.add(`user.balance_${message.author.id}`, 100);

    }
      

    
}
module.exports.help = {
    name: "bonus"
};
      
