const db = require('quick.db'),
      ms = require('parse-ms');
      Discord = require('discord.js')
      const boss_list =  new Array ();

        boss_list[0] ="Бешеный клык";
        boss_list[1] ="Смёгл";
        boss_list[2] ="Бегун";
        boss_list[4] ="Салокнир";



       
          

          const boss_health =  new Array ();
          boss_health[0] = "250";
          boss_health[1] = "500";
          boss_health[2] = "1000";// 2000
          boss_health[4] = "4000";


          const boss_damage =  new Array ();
          boss_damage[0] = "50";
          boss_damage[1] = "100";
          boss_damage[2] = "200";//400
          boss_damage[4] = "800";



      exports.run = async (bot, message, args, tools) => {
        let user = message.author;
        let weapon = await db.fetch(`user.weapon_${user.id}`);
        if (weapon == undefined) weapon = "Кулак";
   


        let cooldown = 8.64e+7;
        let bosstime = await db.fetch(`bosstime_${user.id}`);

        if (bosstime !== null && cooldown - (Date.now() - bosstime) > 0) {
            let timeObj = ms(cooldown - (Date.now() - bosstime));

            message.channel.send(`Ты еще не востановился после прошлого босса, подожди еще **${timeObj.hours}ч ${timeObj.minutes}м**`);
            return;
        } else  db.set(`bosstime_${user.id}`, Date.now());
        

        function random(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
          }
        

          if(args[0]=="1") args[0] = boss_list[0];
          if(args[0]=="2") args[0] = boss_list[1];
          if(args[0]=="3") args[0] = boss_list[2];
          if(args[0]=="5") args[0] = boss_list[4];

         


          
          
          if(!args[0]) return bot.send("Вы не указали Босса");


          let damage = await db.fetch(`user.damage_${user.id}`);
          if (damage == undefined) damage = 5;
          if (damage <= 0) damage = 5;


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




          if(!boss_list.includes(args[0])) return bot.send("Босс не найден");


if (args[0] == boss_list[0]) {
    bh=boss_health[0];
    bd=boss_damage[0];
    bossimage = ("https://img1.goodfon.com/original/2200x1165/b/67/dark-souls-rycar-volk.jpg");
    winimage = ("https://avatars.mds.yandex.net/get-pdb/1209255/f818c752-b842-4387-b464-0a2ffbe5c0f9/s1200");
    lossimage = ("https://slopeofhope.com/.a/6a00e0098982228833017d3c4b913a970c-800wi");
    xp = random(100, 500);
    money = random(200, 1000);
    roleS = ("483248044981092352");
};
if (args[0] == boss_list[1]) {
    bh=boss_health[1];
    bd=boss_damage[1];
    bossimage = ("https://artfiles.alphacoders.com/558/55895.jpg");
    winimage = ("https://i.imgur.com/r5ihePu.png");
    lossimage = ("https://www.rpnation.com/gallery/1483083590125.25708/full?d=1491676904");
    xp = random(500, 1000);
    money = random(1000, 2000);
    roleS = ("565531337725968387");

};

if (args[0] == boss_list[2]) {
    bh=boss_health[2];
    bd=boss_damage[2];
    bossimage = ("https://i.pinimg.com/originals/84/ca/6a/84ca6ae33076b98eb3bdbd3a190194db.jpg");
    winimage = ("https://magic.wizards.com/sites/mtg/files/images/hero/PL20160412_Melissa_icon.jpg");
    lossimage = ("http://2.bp.blogspot.com/-cbUb9m1LJbY/UMIWaYzuvgI/AAAAAAAAAmA/y9xumEHWDms/s1600/FERALS11banner-1024x472.jpg");
    xp = random(1000, 1500);
    money =random(2000, 3000);
    roleS = ("483248053009121280");
 
};


if (args[0] == boss_list[4]) {
    bh=boss_health[4];
    bd=boss_damage[4];
    bossimage = ("https://img1.goodfon.ru/original/3200x1200/d/82/skyrim-dragon-dovakin-dragon.jpg");
    winimage = ("https://cdn.ebaumsworld.com/mediaFiles/picture/718392/84884268.jpg");
    lossimage = ("https://w-dog.ru/wallpapers/7/7/553451668670336.jpg");
    xp = random(2000, 2500);
    money = random(4000, 5000);
    roleS = ("587294713565151263");


};

atcspeed = (Health / bd);
if (atcspeed < 1) atcspeed = 1;

if (((damage * Boost) * atcspeed)>= bh) endimage = winimage;
else endimage = lossimage;
         

      //фото

         


          let embed = new Discord.RichEmbed()
          .setColor('RANDOM')
          .setDescription(`Игрок ${user} решил атаковать босса **${args[0]}!**`)
          .setImage(bossimage);
        

         let win = new Discord.RichEmbed()
         .setColor ("RANDOM")
         .setDescription(`Игрок ${user} победил босса **${args[0]}**, за что и получил:\n **${xp}** опыта и **${money}** <:ros:512226123485020162>`)
         .setImage(winimage);


         let loss = new Discord.RichEmbed()
         .setColor ("RANDOM")
         .setDescription(`Игрок ${user} во время битвы с боссом **${args[0]}** был повержен`)
         .setImage(lossimage);
          

          

          //покупка
          let level = await db.fetch(`lvl_${message.author.id}`);
          let xpus = await db.fetch(`xp_${message.author.id}`); 

         console.log (((damage * Boost) * atcspeed));
         console.log(atcspeed)
          bot.send(embed);

          setTimeout(() => {

          if (endimage == winimage) {
              bot.send (win);
             db.add(`user.balance_${user.id}`, money);
             db.add(`xp_${user.id}`, xp);
             if(message.member.roles.has(roleS)) console.log("у игрока уже есть роль");
            else message.member.addRole(roleS);

           
           
          } else {
              bot.send(loss);
          return;
          };
       

          if (xpus + xp >= level * 50) { 
                
            bot.send(`Игрок ${message.author} повысил свой уровень до ${level + 1}`);
            
            db.subtract(`xp_${message.author.id}`, level * 50);
            db.add(`lvl_${message.author.id}`, 1);
            db.add(`up_${message.author.id}`, 1)
          };
        }, 5000);
          


          


      

      }

module.exports.help = {
    name: "bhunt"
};
