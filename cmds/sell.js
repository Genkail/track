const db = require('quick.db'),
      ms = require('parse-ms');

      exports.run = async (bot, message, args, tools) => {
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
          w_price[12] = "16000";
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

          
          if(!args[0]) return bot.send("Вы не указали предмет");
          const user = message.author;
          let weapon = await db.fetch(`user.weapon_${user.id}`);
           let balance = await db.fetch(`user.balance_${user.id}`);

if(args[0]=="1") args[0] = w_list[0];
if(args[0]=="2") args[0] = w_list[1];
if(args[0]=="3") args[0] = w_list[2];
if(args[0]=="4") args[0] = w_list[3];
if(args[0]=="5") args[0] = w_list[4];
if(args[0]=="6") args[0] = w_list[5];
if(args[0]=="7") args[0] = w_list[6];
if(args[0]=="8") args[0] = w_list[7];
if(args[0]=="9") args[0] = w_list[8];
if(args[0]=="10") args[0] = w_list[9];
if(args[0]=="11") args[0] = w_list[10];
if(args[0]=="12") args[0] = w_list[11];
if(args[0]=="13") args[0] = w_list[12];
if(args[0]=="14") args[0] = w_list[13];
if(args[0]=="15") args[0] = w_list[14];
if(args[0]=="16") args[0] = w_list[15];



          
          if (!args[0]) return bot.send ("Вы не указали оружие");
          if(!w_list.includes(args[0])) return bot.send("Оружие не найдено");
          if (args[0]!== weapon) return bot.send ("У вас нет нужного предмета")
          //цены 
          let price = 0;
          if (args[0]==w_list[0]) price = w_price[0];
          if (args[0]==w_list[1]) price = w_price[1];
          if (args[0]==w_list[2]) price = w_price[2];
          if (args[0]==w_list[3]) price = w_price[3];
          if (args[0]==w_list[4]) price = w_price[4];
          if (args[0]==w_list[5]) price = w_price[5];
          if (args[0]==w_list[6]) price = w_price[6];
          if (args[0]==w_list[7]) price = w_price[7];
          if (args[0]==w_list[8]) price = w_price[8];
          if (args[0]==w_list[9]) price = w_price[9];
          if (args[0]==w_list[10]) price = w_price[10];
          if (args[0]==w_list[11]) price = w_price[11];
          if (args[0]==w_list[12]) price = w_price[12];
          if (args[0]==w_list[13]) price = w_price[13];
          if (args[0]==w_list[14]) price = w_price[14];
          if (args[0]==w_list[15]) price = w_price[15];

          
          
          //покупка
         
             db.add(`user.balance_${user.id}`, price / 2);
             db.delete(`user.weapon_${user.id}`);
             bot.send(`Игрок ${user} успешно продал **${args[0]}** и получил **${price / 2}**`);
          
          
//damage
let damage = await db.fetch(`user.damage_${user.id}`);
if (damage == undefined) damage = 5;
let wdamage = 0;

if (args[0]==w_list[0]) wdamage = w_damage[0];
if (args[0]==w_list[1]) wdamage = w_damage[1];
if (args[0]==w_list[2]) wdamage = w_damage[2];
if (args[0]==w_list[3]) wdamage = w_damage[3];
if (args[0]==w_list[4]) wdamage = w_damage[4];
if (args[0]==w_list[5]) wdamage = w_damage[5];
if (args[0]==w_list[6]) wdamage = w_damage[6];
if (args[0]==w_list[7]) wdamage = w_damage[7];
if (args[0]==w_list[8]) wdamage = w_damage[8];
if (args[0]==w_list[9]) wdamage = w_damage[9];
if (args[0]==w_list[10]) wdamage = w_damage[10];
if (args[0]==w_list[11]) wdamage = w_damage[11];
if (args[0]==w_list[12]) wdamage = w_damage[12];
if (args[0]==w_list[13]) wdamage = w_damage[13];
if (args[0]==w_list[14]) wdamage = w_damage[14];
if (args[0]==w_list[15]) wdamage = w_damage[15];





db.subtract(`user.damage_${user.id}`, wdamage)
if (damage < 0) {
  db.delete(`user.damage_${user.id}`);
  db.add(`user.damage_${user.id}`, 0)
}
          


      

      }

module.exports.help = {
    name: "sell"
};