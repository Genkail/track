const Discord = require('discord.js'); 
const w_list =  new Array ();
          w_list[0] = "Двемерский клинок";
          w_list[1] = "Аод";
          w_list[2] = "Честь Наверхника";
          w_list[3] = "Стеклянный лук";
          w_list[4] = "Арондит";
          w_list[5] = "Шип Мертвых Богов";
          w_list[6] = "Лезвие Веры";
          w_list[7] = "Клинок Пикмана";
          w_list[8] = "Даэдрический Лук";
          w_list[9] = "Соловьиный Клинок";     
          w_list[10] = "Деитвейн";
          w_list[11] = "Авангард";
          w_list[12] = "Удача Торвала";
          w_list[13] = "Лук Ауриэля";
          w_list[14] = "Сияние Рассвета";
          w_list[15] = "Клинок Легендарного Самурая";
          

          const w_price =  new Array ();
          w_price[0] = "750";
          w_price[1] = "1000";
          w_price[2] = "1500";
          w_price[3] = "2250";
          w_price[4] = "3250";
          w_price[5] = "4500";
          w_price[6] = "6000";
          w_price[7] = "7750";
          w_price[8] = "9500";
          w_price[9] = "11500";
          w_price[10] = "13750";
          w_price[11] = "16000";
          w_price[12] = "18000";
          w_price[13] = "18500";
          w_price[14] = "25000";
          w_price[15] = "33750";

          const w_damage =  new Array ();
          w_damage[0] = "15";
          w_damage[1] = "20";
          w_damage[2] = "30";
          w_damage[3] = "45";
          w_damage[4] = "65";
          w_damage[5] = "90";
          w_damage[6] = "120";
          w_damage[7] = "155";
          w_damage[8] = "190";
          w_damage[9] = "230";
          w_damage[10] = "275";
          w_damage[11] = "320";
          w_damage[12] = "370";
          w_damage[13] = "425";
          w_damage[14] = "500";
          w_damage[15] = "675";
 
exports.run = (bot,message,args) => {
  let pages = [`**1. ${w_list[0]}**\nУрон:**${w_damage[0]}**, Цена: **${w_price[0]}**\n\n**2. ${w_list[1]}**\nУрон:**${w_damage[1]}**, Цена: **${w_price[1]}**\n\n**3. ${w_list[2]}**\nУрон:**${w_damage[2]}**, Цена: **${w_price[2]}**\n\n**4. ${w_list[3]}**\nУрон:**${w_damage[3]}**, Цена: **${w_price[3]}**\n\n**5. ${w_list[4]}**\nУрон:**${w_damage[4]}**, Цена: **${w_price[4]}**`,`**6. ${w_list[5]}**\nУрон:**${w_damage[5]}**, Цена: **${w_price[5]}**\n\n**7. ${w_list[6]}**\nУрон:**${w_damage[6]}**, Цена: **${w_price[6]}**\n\n**8. ${w_list[7]}**\nУрон:**${w_damage[7]}**, Цена: **${w_price[7]}**\n\n**9. ${w_list[8]}**\nУрон:**${w_damage[8]}**, Цена: **${w_price[8]}**\n\n**10. ${w_list[9]}**\nУрон:**${w_damage[9]}**, Цена: **${w_price[9]}**`,`**11. ${w_list[10]}**\nУрон:**${w_damage[10]}**, Цена: **${w_price[10]}**\n\n**12. ${w_list[11]}**\nУрон:**${w_damage[11]}**, Цена: **${w_price[11]}**\n\n**13. ${w_list[12]}**\nУрон:**${w_damage[12]}**, Цена: **${w_price[12]}**\n\n**14. ${w_list[13]}**\nУрон:**${w_damage[13]}**, Цена: **${w_price[13]}**\n\n**15. ${w_list[14]}**\nУрон:**${w_damage[14]}**, Цена: **${w_price[14]}**\n\n**16. ${w_list[15]}**\nУрон:**${w_damage[15]}**, Цена: **${w_price[15]}**`]; 
  let page = 1; 
  const embed = new Discord.RichEmbed() 
    .setColor(0xffffff)
    .setFooter(`Страница ${page} Из ${pages.length}`) 
    .setImage("https://cdn.discordapp.com/attachments/496915902063837184/584964246312321034/1880b445bf19e497e05baa7aba9b43e0-medieval-weapon-pack-silhouette.jpg")
    .setDescription(pages[page-1])

  message.channel.send(embed).then(msg => { 
    msg.react('⏪').then( r => { 
      msg.react('⏩') 
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;
      const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 });
      backwards.on('collect', r => { 
        if (page === 1) return; 
        page--; 
        embed.setDescription(pages[page-1]) 
        .setImage("https://cdn.discordapp.com/attachments/496915902063837184/584964246312321034/1880b445bf19e497e05baa7aba9b43e0-medieval-weapon-pack-silhouette.jpg")
        embed.setFooter(`Страница ${page} из ${pages.length}`); 
        msg.edit(embed) 
      })
      forwards.on('collect', r => { 
        if (page === pages.length) return; 
        page++; 
        embed.setDescription(pages[page-1]) 
        .setImage("https://cdn.discordapp.com/attachments/496915902063837184/584964246312321034/1880b445bf19e497e05baa7aba9b43e0-medieval-weapon-pack-silhouette.jpg")
        embed.setFooter(`Страница ${page} Из ${pages.length}`); 
        msg.edit(embed) 
      }) 
    })
  })
}
module.exports.help = {
    name: "shop",
    aliases: []
};