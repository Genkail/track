const db = require('quick.db'),
      ms = require('parse-ms');
      Discord = require('discord.js')
     

      exports.run = async (bot, message, args, tools) => {

        function random(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
          }
          const huntlist = [
            "на тебя напали разбойники и ты потерял",
            "ты нашел сундук в котором было",
            "ты нашел сундук в котором было",
            "ты убил зайца, за продажу которого ты получил",
            "ты убил зайца, за продажу которого ты получил",
            "ты встретил медведя, он ранил тебя и ты потерял",
            "ты встретил чудовище и вынужден быть бежать, ты потерял",
            "ты встретил оленя... за продажу его рогов ты получил",
            "ты встретил оленя... за продажу его рогов ты получил",
            "на тебя напал оборотень, ты потратил на лекарство от ликантропии",
            "на тебя напала стая волков, ты потерял",
            "ты убил пантеру и получил",
            "ты убил пантеру и получил",
            "ты убил гарпию, за что и получил",
            "ты убил гарпию, за что и получил",
            ""
        ];
       
        let index = Math.floor(Math.random() * (huntlist.length - 1));
        let xps = 10;
        let image = "http://1.bp.blogspot.com/_ZipDZRRuTRA/SFZpBpgqmfI/AAAAAAAAAzU/fqQyAgevbh8/w1200-h630-p-k-no-nu/Coins.JPG";
        let cooldown = 0.18e+7,
        amount = random(10, 200);
if (huntlist[index] == "ты убил гарпию, за что и получил") image = ("https://i.imgur.com/lyZWY3w.png");
if (huntlist[index] == "ты убил пантеру и получил") image = ("https://i.imgur.com/KTaw1Ma.jpg");
if (huntlist[index] == "на тебя напала стая волков, ты потерял"){
    xps = 0;
    image = ("https://i.imgur.com/Bz1BSed.jpg");
};
if (huntlist[index] == "ты встретил оленя... за продажу его рогов ты получил") image = ("https://i.imgur.com/FP1lC0u.jpg");
if (huntlist[index]=="на тебя напали разбойники и ты потерял") {
     image = ("https://pic.rutube.ru/video/7f/f4/7ff4a3460fea00fb8dbc2bd7cc0e0462.jpg");

    xps = 0;
};
if (huntlist[index] == "на тебя напал оборотень, ты потратил на лекарство от ликантропии") {
    image = ("https://i.imgur.com/oIif4lE.jpg");
    xps = 0;

};
if (huntlist[index] == "ты встретил медведя, он ранил тебя и ты потерял"){
    image = ("http://i.ucrazy.ru/files/pics/2019.01/thumbs/1548143125_medved-boy-voin-fight-4954131.jpeg");

    xps = 0;
};
if (huntlist[index] == "ты встретил чудовище и вынужден быть бежать, ты потерял"){
    image = ("http://s1.1zoom.me/prev/509/508255.jpg");

    xps = 0;
};
if (huntlist[index] == "ты нашел сундук в котором было")image = ("http://www.allfons.ru/pic/201306/800x600/allfons.ru-26179.jpg");
if (huntlist[index] == "ты убил зайца, за продажу которого ты получил")image = ("https://www.publy.ru/wp-content/uploads/2018/09/dengi-v-meshochkah-620x448.jpg");
let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(`Во время охоты ${huntlist[index]} **${amount}**<:ros:512226123485020162>`)
    .setImage(image)
  
       let xp = await db.fetch(`xp_${message.author.id}`);  
        let HuntTime = await db.fetch(`hunt_${message.author.id}`);

        if (HuntTime !== null && cooldown - (Date.now() - HuntTime) > 0) {
            let timeObj = ms(cooldown - (Date.now() - HuntTime));

            message.channel.send(`Ты еще не отдохнул от охоты подожди еще **${timeObj.hours}ч ${timeObj.minutes} м**`);
          return;

        } else {message.channel.send(embed);

          

        db.set(`hunt_${message.author.id}`, Date.now());
        if (huntlist[index] == "на тебя напали разбойники и ты потерял" || huntlist[index] == "ты встретил медведя, он ранил тебя и ты потерял" || huntlist[index] == "ты встретил чудовище и вынужден быть бежать, ты потерял" || huntlist[index] == "на тебя напал оборотень, ты потратил на лекарство от ликантропии" || huntlist[index] == "на тебя напала стая волков, ты потерял") db.subtract(`user.balance_${message.author.id}`, amount);
           
        else db.add(`user.balance_${message.author.id}`, amount);

    };
    db.add(`xp_${message.author.id}`, xps);

let level = await db.fetch(`lvl_${message.author.id}`);
if (level == undefined ||level == 0 ||level == null) db.add(`lvl_${message.author.id}`, 1);
if (xp + xps > level * 50) { 
    
     bot.send(`Игрок ${message.author} повысил свой уровень до ${level + 1}`);
   
     db.subtract(`xp_${message.author.id}`,level * 50);
     db.add(`lvl_${message.author.id}`, 1);
     db.add(`up_${message.author.id}`, 1);
};
    

      

    
}
module.exports.help = {
    name: "hunt"
};