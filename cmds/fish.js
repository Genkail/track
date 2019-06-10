const db = require('quick.db'),
      ms = require('parse-ms');
      Discord = require('discord.js')
     

      exports.run = async (bot, message, args, tools) => {

        function random(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
          }
          const fishlist = [
            "ты поймал окуня и получил",
            "ты ничего не поймал, но потратил на дорогу",
            "ты поймал леща и получил",
            "ты ничего не поймал, но потратил на дорогу",
            "ты поймал камбалу и получил",
            "ты ничего не поймал, но потратил на дорогу",
            "ты нашел сундук в котором было",
            "ты ничего не поймал, но потратил на дорогу",
            "ты поймал щуку и получил",
            "ты ничего не поймал, но потратил на дорогу",
            ""
        ];
       
        let index = Math.floor(Math.random() * (fishlist.length - 1));
        let xps = 10;
        
        let cooldown = 0.18e+7,
        amount = random(10, 200);
if (fishlist[index] == "ты поймал окуня и получил") image = ("https://www.desktopbackground.org/t/2013/10/25/659754_wall-murals-and-borders-on-pinterest_736x547_h.jpg");
if (fishlist[index] == "ты поймал леща и получил") image = ("https://i.pinimg.com/736x/61/30/27/613027d5dd126c65df121747af85c862.jpg");
if (fishlist[index] == "ты ничего не поймал, но потратил на дорогу"){
    xps = 0;
    image = ("https://media.gettyimages.com/vectors/unhappy-fisherman-vector-id93172017?b=1&k=6&m=93172017&s=612x612&w=0&h=VNfIJ4kZFL8lhnDUfcT5k20psnuThrUPhGiitITdV3E=");
};
if (fishlist[index] == "ты поймал камбалу и получил") image = ("https://fion.ru/images/photo/251b864128c8b99b6096d453a6ed4ce2.jpg");


if (fishlist[index] == "ты нашел сундук в котором было")image = ("http://www.allfons.ru/pic/201306/800x600/allfons.ru-26179.jpg");
if (fishlist[index] == "ты поймал щуку и получил")image = ("https://wallbox.ru/resize/1920x1080/wallpapers/main/201522/88b3da404bde0e5.jpg");
let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(`Во время рыбалки ${fishlist[index]} **${amount}**<:ros:512226123485020162>`)
    .setImage(image)
  
       let xp = await db.fetch(`xp_${message.author.id}`);  
        let fishTime = await db.fetch(`fish_${message.author.id}`);

        if (fishTime !== null && cooldown - (Date.now() - fishTime) > 0) {
            let timeObj = ms(cooldown - (Date.now() - fishTime));

            message.channel.send(`Ты еще не отдохнул от рыбалки, подожди еще **${timeObj.hours}ч ${timeObj.minutes} м**`);
          return;

        } else {message.channel.send(embed);

          

        db.set(`fish_${message.author.id}`, Date.now());
        if (fishlist[index] == "ты ничего не поймал, но потратил на дорогу") db.subtract(`user.balance_${message.author.id}`, amount);
           
        else db.add(`user.balance_${message.author.id}`, amount);

    };
    db.add(`xp_${message.author.id}`, xps);

let level = await db.fetch(`lvl_${message.author.id}`);
if (level == undefined ||level == 0 ||level == null) db.add(`lvl_${message.author.id}`, 1);
if (xp + xps >= level * 50) { 
    
     bot.send(`Игрок ${message.author} повысил свой уровень до ${level + 1}`);
   
     db.subtract(`xp_${message.author.id}`,level * 50);
     db.add(`lvl_${message.author.id}`, 1);
     db.add(`up_${message.author.id}`, 1);
};
    

      

    
}
module.exports.help = {
    name: "fish"
};