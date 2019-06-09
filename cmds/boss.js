const Discord = require('discord.js'); 
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

 
exports.run = (bot,message,args) => {

  const embed = new Discord.RichEmbed() 
    .setColor("RANDOM")
    .addField(`**1. ${boss_list[0]}**`,`Здоровье: **${boss_health[0]}**, Атака: **${boss_damage[0]}**`)

    .addField(`**2. ${boss_list[1]}**`,`Здоровье: **${boss_health[1]}**, Атака: **${boss_damage[1]}**`)

    .addField(`**3. ${boss_list[2]}**`,`Здоровье: **${boss_health[2]}**, Атака: **${boss_damage[2]}**`)
    .addField(`**4. ???**`,`Здоровье: **???**, Атака: **???**`)

    .addField(`**5. ${boss_list[4]}**`,`Здоровье: **${boss_health[4]}**, Атака: **${boss_damage[4]}**`)
   
    .addField(`**6. ???**`,`Здоровье: **???**, Атака: **???**`)
    .addField(`**7. ???**`,`Здоровье: **???**, Атака: **???**`)
    .addField(`**8. ???**`,`Здоровье: **???**, Атака: **???**`)

    .setImage("https://img2.badfon.ru/original/2000x1112/f/9d/art-monstr-drakon-yarost.jpg")
bot.send(embed);
};
module.exports.help = {
    name: "blist",
    aliases: []
};