const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
  function report(message, reason, time) {
    let embed = new Discord.RichEmbed()
        .setColor('#800080')
        .addField("📕Нарушитель", `${message.author} with ID: ${message.author.id}`)
        .addField("📢Канал", message.channel)
        .addField("📄Причина", reason )
        .addField("Время мута", time);
        let rpchannel = message.guild.channels.find('name', '🚫наказания')
        rpchannel.send(embed)
    }
    try{
      
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("У вас нет прав");
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!args[0]) return bot.send("Вы не указали пользователя");
    if(!rUser) return bot.send("Пользователь не найден");
    if(!profile[rUser.id])return bot.send("Пользователя нету в profile.json");
         let rreason = args.join(" ").slice(22);
    if(!rreason) return message.channel.send("вы не указали причину");

    profile[rUser.id].warns++;
    fs.writeFile('./profile.json',JSON.stringify(profile),(err)=>{
        if(err) console.log(err);
    });
      let roleS = message.guild.roles.find(r => r.name === "Muted");
    if(profile[rUser.id].warns >=3){


          message.member.addRole(roleS); 
             
         bot.mutes[message.author.id] = {
            guild:message.guild.id,
            time:parseInt(Date.now() + (120 * 60 * 1000)),
        };
        fs.writeFile('./mutes.json',JSON.stringify(bot.mutes),(err)=>{
            if(err) console.log(err);
        });
    
         report(message, "3/3 предупреждений", "120 Минут");
    
  }
    let embed = new Discord.RichEmbed()
    .setDescription("Предупреждение")
    .setColor('#e22216')
    .addField("Администратор",message.author.username)
    .addField("Выдал предупреждение",`${rUser.user.username}`)
    .addField("Причина:", rreason)
    .addField("Количество предупрежденией",`${profile[rUser.id].warns}/3`);
    

     let rpchannel = message.guild.channels.find('name', '🚫наказания')
      rpchannel.send(embed)
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "warn"
};
