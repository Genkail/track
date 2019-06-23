const db = require('quick.db'),
      ms = require('parse-ms');

      exports.run = async (bot, message, args, tools) => {
        function random(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
          }
        let level = await db.fetch(`lvl_${message.author.id}`);
        if (level == undefined ||level == 0 ||level == null) {
            level = 1;
            db.add(`lvl_${message.author.id}`, 1);
        };
        const work_list =  new Array ();

        work_list[0] ="Сапожник";
        work_list[1] ="Мясник";
        work_list[2] ="Кузнец";


        if (!args[0]) return bot.send ("Вы не указали работу");
       
        let cooldown = 0.18e+7; 
        if(!work_list.includes(args[0])) return bot.send("Работа не найдена");
        let xp = await db.fetch(`xp_${message.author.id}`); 
        

        if (args[0] == "Сапожник") {

            if (level < 2) return bot.send("У вас недостаточный уровень для этой профессии")

            
            min = (level * 50);
            workname = ("сапожником");
            xps = 20
            maxx = (level * 200);
            amount = random (min, maxx);
            imagee = ('http://www.playcast.ru/uploads/2015/11/25/16027047.jpg');

        };
        if (args[0] == "Мясник") {

            if (level < 5) return bot.send("У вас недостаточный уровень для этой профессии")

           workname =("мясником");
            min = (level * 75);
            xps = 40
            maxx = (level * 300);
            amount = random (min, maxx);
            imagee = ("https://cs12.pikabu.ru/post_img/2019/02/23/10/1550938895147190649.jpg");
            

        };
        if (args[0] == "Кузнец") {

            if (level < 10) return bot.send("У вас недостаточный уровень для этой профессии")
            xps = 80
            workname = ("кузнецом");
            min = (level * 150);
            maxx = (level * 600);
            amount = random (min, maxx);
            imagee = ('https://im0-tub-ru.yandex.net/i?id=5709935069e524042f990d94fa44e96c&n=13');


        };




        let lastwork = await db.fetch(`work_${message.author.id}`);
        let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(`**${message.author.username}** решил поработать **${workname}** и заработал **${amount}**<:ros:512226123485020162>`)
    .setImage(imagee)

        if (lastwork !== null && cooldown - (Date.now() - lastwork) > 0) {
            let timeObj = ms(cooldown - (Date.now() - lastwork));

            message.channel.send(`Ты еще не отдохнул от работы, подожди еще **${timeObj.hours}ч ${timeObj.minutes} м**`);

        } else {bot.send(embed);

        db.set(`work_${message.author.id}`, Date.now());
        db.add(`user.balance_${message.author.id}`, amount);
        db.add(`xp_${message.author.id}`, xps);
        if (xp + xps >= level * 50) { 
    
            bot.send(`Игрок ${message.author} повысил свой уровень до ${level + 1}`);
          
            db.subtract(`xp_${message.author.id}`,level * 50);
            db.add(`lvl_${message.author.id}`, 1);
            db.add(`up_${message.author.id}`, 1);
       };
    }
      

    
}
module.exports.help = {
    name: "work"
};
      
