const Discord = require('discord.js');
const bot = new Discord.Client();
const db = require('quick.db');
bot.commands = new Discord.Collection();
const fs = require('fs');
bot.mutes = require('./mutes.json');
let config = require('./botconfig.json');


let prefix = config.prefix;
let profile = require('./profile.json');
fs.readdir('./cmds/',(err,files)=>{
    if(err) console.log(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <=0) console.log("Нет комманд для загрузки!!");
    console.log(`Загружено ${jsfiles.length} комманд`);
    jsfiles.forEach((f,i) =>{
        let props = require(`./cmds/${f}`);
        console.log(`${i+1}.${f} Загружен!`);
        bot.commands.set(props.help.name,props);
    });
});
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
function report(message, reason, time) {
    let embed = new Discord.RichEmbed()
        .setColor('#800080')
        .addField("📕Нарушитель", `${message.author} with ID: ${message.author.id}`)
        .addField("📢Канал", message.channel)
        .addField("📄Причина", reason )
        .addField("Время мута", time);
        let rpchannel = message.guild.channels.find('name', '🚫наказания')
        rpchannel.send(embed)
    };
const usersInVoiceChannels = new Discord.Collection();

const isAFKChannel = channel => channel.guild.afkChannelID === channel.id
const calculateOnline = id =>  {
    const user = usersInVoiceChannels.get(id);

    let profileE =  db.fetch(`voicetime_${id}`);

    if(!profileE) {
        profileE = 0;
        db.add(`voicetime_${id}`, 0);
    };
  const now = Date.now();
  const seconds = (now - user.time) / 1e3;
  const minutes = Math.floor(seconds / 60) % 60;
    if (minutes > 0) {
    db.add(`voicetime_${id}`,(1 * minutes));
    };
console.log(id);
let KKAA = db.fetch(`voicetime_${id}`);

let sssss = ("587222469660901412");

console.log(KKAA);

console.log(`userR = ${id}`);
if (15 <= KKAA)  bot.guilds.first().member(id).addRole(sssss);//coals
if (30 <= KKAA)  bot.guilds.first().member(id).addRole('587196847471198209');//bronze
if (60 <= KKAA)  bot.guilds.first().member(id).addRole('587196673499856897');//silver
if (120 <= KKAA)  bot.guilds.first().member(id).addRole('587196586161864715');//gold
if (240 <= KKAA)  bot.guilds.first().member(id).addRole('587196263150387200');//platinum
if (480 <= KKAA)  bot.guilds.first().member(id).addRole('587223457259978764');//quartz
if (960 <= KKAA)  bot.guilds.first().member(id).addRole('587223295427084296');//granet
if (1920 <= KKAA)  bot.guilds.first().member(id).addRole('587223038064459777');//topaz
if (3840 <= KKAA)  bot.guilds.first().member(id).addRole('587222937732382720');//aquamarine
if (7680 <= KKAA)  bot.guilds.first().member(id).addRole('587195483521548288');//ametist
if (15360 <= KKAA)  bot.guilds.first().member(id).addRole('587195922036031513');//crystal
if (30720 <= KKAA)  bot.guilds.first().member(id).addRole('587195188179632149');//pearl
if (61400 <= KKAA)  bot.guilds.first().member(id).addRole('587195080184561694');//saphire
if (122880 <= KKAA)  bot.guilds.first().member(id).addRole('587194772343619584');//ruby
if (245760 <= KKAA)  bot.guilds.first().member(id).addRole('587194403794452512');//Emerald
if (491520 <= KKAA)  bot.guilds.first().member(id).addRole('587194101875605505');//ametist




};
bot.on('presenceUpdate',(oldMember, newMember)=>{
    let games = [ {roleid: '518790778948943876', name: 'Counter-Strike: Global Offensive'}, {roleid: '513991352262852628', name: 'DOTA 2'}, {roleid: '518791050911940618', name: 'Minecraft'}, {roleid: '518791565855031297', name: "PLAYERUNKNOWN'S BATTLEGROUNDS"}, {roleid: '518791802342342666', name: "Garry's mod"}, {roleid: '527787390371364874', name: 'Terraria'}, {roleid: '527786787830235147', name: 'Warface'}, {roleid: '533916595559596032', name: 'Fortnite'}, {roleid: '604332149885239375', name: 'Grand Theft Auto V'}, {roleid: '604332673271332894', name: 'Rust'}, {roleid: '604335619862429709', name: "Tom Clancy's Rainbow Six Siege"}, {roleid: '604335787882053642', name: "Portal 2"} ]
let a = games.find(game => game.name == newMember.presence.game);
if (a) {
if(newMember.roles.has(a.roleid)) return;
    newMember.addRole(a.roleid);
}
});

bot.on('ready', () => {
    console.log(`Запустился бот ${bot.user.username}`);
    bot.generateInvite(["ADMINISTRATOR"]).then(link =>{
        console.log(link);
    });
    bot.setInterval(()=>{
        for(let i in bot.mutes){
            let time = bot.mutes[i].time;
            let guildid = bot.mutes[i].guild;
            let guild = bot.guilds.get(guildid);
            let member = guild.members.get(i);
             if (!member) continue;
            let muteRole = member.guild.roles.find(r => r.name === "Muted"); 

            if(!muteRole) continue;
          

            if(Date.now()>= time){
                member.removeRole(muteRole);
                delete bot.mutes[i];
                fs.writeFile('./mutes.json',JSON.stringify(bot.mutes),(err)=>{
                    if(err) console.log(err);
                });
            }
        }

    },5000)
  const guild = bot.guilds.first()

    const channels = guild.channels
      .filter(channel => channel.type === 'voice' && !isAFKChannel(channel))
      .array()
  
    for (const channel of channels) {
      const members = channel.members.array()
      console.log(members)
  
      for (const member of members) {
        if (!member.user.bot) {
          usersInVoiceChannels.set(member.id, {
            time: Date.now()
          })
        }
      }
    }
});
bot.on('voiceStateUpdate', (oldMember, newMember) => {
  
    
    
    const oldChannel = oldMember.voiceChannel
    const newChannel = newMember.voiceChannel
    const { id, user } = oldMember || newMember
  
  
    if (user.bot) {
      return
    }
  
    if (oldChannel && !newChannel) {
      console.log("calculate")
  
      calculateOnline(id)
      usersInVoiceChannels.delete(id)
  
    } else if (newChannel && !oldChannel) {
      console.log("exit")
      usersInVoiceChannels.set(id, {
        time: Date.now()
      })
      
    } else if (oldChannel && !isAFKChannel(newChannel)) {
      console.log("AFK")
  
      calculateOnline(id)
      usersInVoiceChannels.delete(id)
      usersInVoiceChannels.set(id, {
        time: Date.now()
      })
    }


});

bot.on('guildMemberAdd',member=>{

    member.addRole('483248047812509706');
});

bot.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    let uid = message.author.id;
    bot.send = function (msg){
        message.channel.send(msg);
    };
    if(!profile[uid]){
        profile[uid] ={
            coins:10,
            warns:0,
            xp:0,
            lvl:1,
        };
    };
    let u = profile[uid];

    u.coins++;
    u.xp++;

    if(u.xp>= (u.lvl * 5)){
        u.xp = 0;
        u.lvl += 1;
    };


    fs.writeFile('./profile.json',JSON.stringify(profile),(err)=>{
        if(err) console.log(err);
    });

    let messageArray = message.content.split(" ");
    let command = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);
    if(!message.content.startsWith(prefix)) return;
    let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot,message,args);
    bot.rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    bot.uId = message.author.id;
});



const activities_list = [
    "Разговоры посетителей",
    "Байку про клад",
    "Легенду о самурае"
];
bot.on('ready', () => {
    bot.user.setStatus('available')
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        bot.user.setActivity(activities_list[index], { type: 'LISTENING' });
    }, 600000)});
    bot.on('guildMemberAdd', member => { 
        var channel = member.guild.channels.get('575237525455765514')
        channel.send(`**Приветствую тебя**${member}, надеюсь, тебе у нас понравится! `)
        member.send(`Добро пожаловать в Таверну! просьба ознакомится с <#533914378227941376>`)  //Бот будет в ЛС писать "Добро пожаловать"
    })
    bot.on("message", (message)=>{
        if(message.content.indexOf('discord.gg') != -1){
                let logs = message.guild.channels.find(r => r.name === "logs");
                if(!logs) return bot.send('Создайте канал #logs');
                if(!message.member.hasPermission("MANAGE_MESSAGES")){    
                message.channel.bulkDelete(1);
                let role= message.guild.roles.find(r => r.name === 'Muted')
                message.guild.member(message.author).addRole(role.id);
                logs.send(`${message.author}\n${message.content}`)
                report(message, "[2.7]Реклама", "30 Минут");
                 bot.mutes[message.author.id] = {
            guild:message.guild.id,
            time:parseInt(Date.now() + (30 * 60 * 1000)),
        };
        fs.writeFile('./mutes.json',JSON.stringify(bot.mutes),(err)=>{
            if(err) console.log(err);
        });
                }
        }})

async function test1() {
    bot.channels.find(c => c.id === "578938585022201876").setName(`🌚Всего участников: ${bot.guilds.get('386108959049777152').members.size}`);
    bot.channels.find(c => c.id === "578938479283666972").setName(`👥Людей: ${bot.guilds.get('386108959049777152').members.filter(mem => !mem.user.bot === true).size}`);
    bot.channels.find(c => c.id === "578938926363050004").setName(`👽Ботов: ${bot.guilds.get('386108959049777152').members.filter(mem => mem.user.bot === true).size}`);
    bot.channels.find(c => c.id === "578938430994513921").setName(`🌝В сети: ${bot.guilds.get('386108959049777152').presences.size}`);
}; setInterval(test1, 30000)

    
var foo = {};
bot.on("message",(message)=>{
 
 
    if(message.channel.id=="565164893867737144") return;
    if(message.channel.id=="496915902063837184") return;
    if(message.author.id=="267967915855314944") return;
    if(message.author.bot!==(false)) return;
      
    
    if(!foo[message.author.id]) { foo[message.author.id] = 0; }
  if(!message.guild.member(message.author).roles.find(r => r.name == "Muted")){
    foo[message.author.id]++;
  setTimeout(()=>{
    foo[message.author.id]--;
  },10000);
  

  if(foo[message.author.id] == 3){
    message.channel.send(`${message.author}, Прекратите спамить`)

  }
  let roleS = message.guild.roles.find(r => r.name === "Muted");
  if(foo[message.author.id] == 6){
    message.channel.bulkDelete(foo[message.author.id]+1)
          let role = message.guild.roles.find(r => r.name === "Muted");
          message.member.addRole(roleS); 
             
         bot.mutes[message.author.id] = {
            guild:message.guild.id,
            time:parseInt(Date.now() + (30 * 60 * 1000)),
        };
        fs.writeFile('./mutes.json',JSON.stringify(bot.mutes),(err)=>{
            if(err) console.log(err);
        });
    
         report(message, "[1.1]Спам", "30 Минут");
    
  }
  }
  });



 bot.login(process.env.TOKEN);
