const db = require('quick.db');

exports.run = async (bot, message, args, tools) => {
    const perks =  new Array ();
    perks[0] = "health";
    perks[1] = "fizdamage";
    perks[2] = "marksmanship";

if (args[1] == "1") args[1] = perks[0];
if (args[1] == "2") args[1] = perks[1];
if (args[1] == "3") args[1] = perks[2];

let user = message.author



    let point = await db.fetch(`up_${message.author.id}`);
if (point == null|| point == undefined) point = 0
if (!args[0]) return bot.send ("вы не указали количество очков");

if (args[0] > point) return bot.send ("У вас недостаточно очков");

if (!args[1]) return bot.send("Вы не указали улучшаемую характеристику");
if(!perks.includes(args[1])) return bot.send("Характеристика не найдена");

let Health = await db.fetch(`user.health_${message.author.id}`);
if (Health == 0|| Health == null || Health == undefined) db.add(`user.health_${message.author.id}`,100);
let fizdamage = await db.fetch(`user.fizdamage_${message.author.id}`);
if (fizdamage == null ||fizdamage == 0 || fizdamage == undefined) db.add(`user.fizdamage_${message.author.id}`,1);
let Marksmanship = await db.fetch(`user.marksmanship_${message.author.id}`);
if (Marksmanship == null || Marksmanship == undefined || Marksmanship == 0) db.add(`user.marksmanship_${message.author.id}`,1);

if (args[1] == perks[0]) {
    db.add(`user.health_${user.id}`,args[0] * 25)
bot.send (`${message.author} успешно улучшил характеристику "Здоровье"`);
};
if (args[1] == perks[1]) {
    db.add(`user.fizdamage_${user.id}`,args[0] * 0.05)
bot.send (`${message.author} успешно улучшил характеристику "Физическая сила"`);
};
if (args[1] == perks[2]) {
    db.add(`user.marksmanship_${user.id}`, args[0] * 0.1)
bot.send (`${message.author} успешно улучшил характеристику "Меткость"`);


};
db.subtract(`up_${message.author.id}`, args[0]);
    
    

}

module.exports.help = {
    name: "up"
};