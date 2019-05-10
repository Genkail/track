const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const fs = require('fs');
bot.mutes = require('./mutes.json');
let config = require('./botconfig.json');
let token = config.token;
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

});
bot.on('guildMemberAdd',(member)=>{
    let role = member.guild.roles.find(r => r.name === "Приезжий");
    member.addRole(role);
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
bot.on("message", (message)=>{
    if(message.content == "!c") {
    const exampleEmbed = new Discord.RichEmbed()
        
        
        
        .setColor('#00b2ff')
    
    
        .setDescription("**Общие правила**- **запрещено** : Ссылки на другие каналы(в том числе в лс участникам)\n <#497721969538498581> - Используется *исключительно* для заявок! любая другая информация будет расцениваться как нарушение\n<#386108959049777155> - Используется для общения (все фото, файлы и тд в спам)\n<#565164893867737144> - Сюда скидывается различный мусор (видео, фото, мемы и тд, `Общение в данном чате будет расцениваться как нарушение`)\n<#497619442885328896>  - Используется строго для взаимодействия с муз.ботами: Диджей`префикс ?` и Бард`префикс +`")        
        .setTimestamp()
        .setFooter('правила всегда можно дополнить!');
     message.channel.send(exampleEmbed);
    }
});
bot.on("message", (message)=>{
    if(message.content == "!rofl") {
    const exampleEmbed = new Discord.RichEmbed()
        
        
        .setColor('#00ff19')
        
        .setTitle('**ПРАВИЛА РОФЛТУРИКОВ**')
    
        .setDescription("```ini\n[1] - Выбывание из турнира после 2 поражений \n[2] -Количество игр на этапах : \n[Тур 1, Тур 2] - Best of 1; \n[Полуфинал] - Best of 3; \n[Финал] - Best of 5. \n[3] - Карты участвующие в драфте: Mirage, Dust 2, Inferno, Train, Nuke, Overpass, Cache \n[4] - Турнир не может продолжатся дольше  двух недель.\n[5] - Игрок может попросить паузу до 5 минут (если он просил паузу на 3 минуты то потом может попросить еще на 2)\n[6] - Игрок может попросить перенести матч (максимум за час) по [уважительной причине]\n[7] - Взносы не возвращаются (кроме случая когда турнир не могут провести) \n[8] - Если вам нужна пауза пишем в чат об этом (пример : !p, pause, pauza,!pause) [Обязательно на английском, или транслитом]\n```\n__**ПО ВСЕМ ВОПРОСАМ :**__ В группу вк либо в лс <@267967915855314944> либо <@305585850375208960>\n")        
        .setTimestamp()
        .setFooter('правила всегда можно дополнить!');
     message.channel.send(exampleEmbed);
    }
});
bot.on("message", (message)=>{
    if(message.content == "!pravila") {
    const exampleEmbed = new Discord.RichEmbed()
    
        .setColor('#36393E')
        .setImage('https://i.imgur.com/JGI5iQo.jpg')
        
        
    
    
     message.channel.send(exampleEmbed);
    }
});

bot.login(token);
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
        message.channel.bulkDelete(1)
        let muteRolez = message.guild.roles.find(r => r.name === 'Muted'); 
        message.member.addRole(muteRolez);
        logs.send(`${message.author}\n${message.content}`)
        }
}})
