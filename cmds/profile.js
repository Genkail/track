const db = require('quick.db');
const Discord = require('discord.js');

exports.run = async (bot, message, args, tools) => {
    let user = message.mentions.users.first() || message.author;

    let balance = await db.fetch(`user.balance_${user.id}`);
    if (balance == undefined) balance = 0;

    let weapon = await db.fetch(`user.weapon_${user.id}`);
     if (weapon == undefined) weapon = "Кулак";

     let damage = await db.fetch(`user.damage_${user.id}`);
     if (damage == undefined) damage = 5;
     if (damage <= 0) damage = 5;
     let level = await db.fetch(`lvl_${user.id}`);
     if (level == undefined ||level == 0 ||level == null) {
         level = 1;
         db.add(`lvl_${user.id}`, 1);
     };
     let point = await db.fetch(`up_${user.id}`);
if (point == null|| point == undefined) point = 0;
let Health = await db.fetch(`user.health_${user.id}`); 
    if (Health == 0|| Health == null || Health == undefined) {
        db.add(`user.health_${user.id}`,100);
    Health = 100
};
let fizdamage = await db.fetch(`user.fizdamage_${user.id}`);
if (fizdamage == null ||fizdamage == 0 || fizdamage == undefined) {
    db.add(`user.fizdamage_${user.id}`,1);
    fizdamage = 1
};
let Marksmanship = await db.fetch(`user.marksmanship_${user.id}`);
if (Marksmanship == null || Marksmanship == undefined || Marksmanship == 0) {
    Marksmanship = 1;
    db.add(`user.marksmanship_${user.id}`,1);
};

let Boost = fizdamage;
const bows =  new Array ();

bows[0] = "Стеклянный лук";

bows[1] = "Даэдрический Лук";
  

bows[2] = "Лук Ауриэля";
if(bows.includes(weapon)) Boost = Marksmanship;

console.log(damage);
console.log(Boost);
damage = damage * Boost;





     
     let xp = await db.fetch(`xp_${user.id}`);
     if (xp == undefined ||xp == null) xp = 0;
  console.log(`${xp}o`);

    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(user.tag)
        .addField(`Баланс:`,`**${Math.floor(balance)}**<:ros:512226123485020162>`)
        .addField(`Оружие:`,`**${weapon}**`,true)
        .addField(`Урон:`,`**${Math.floor(damage)}**`,true)
        .addField(`Броня:`,`**Рванье**`,true)
        .addField(`Очки брони:`,`**0**`,true)

        .addField(`Уровень:`,`**${level}**`,true)
        .addField(`Прогресс уровня:`,`**${xp}/${level * 50}**` ,true)
        .addField(`Свободные очки уровня:`, `**${point}**`)
        .addField(`Здоровье:`, `**${Health}**`,true )
        .addField(`Физическая сила:`, `**${Math.floor(fizdamage * 100)}**`,true)
        .addField(`Меткость:`, `**${Math.floor(Marksmanship * 100)}**`,true)
        .setThumbnail(user.displayAvatarURL)
        
        message.channel.send(embed);

}
module.exports.help = {
    name: "p"
};