const Discord = require("discord.js");

const bot = new Discord.Client();

const frames = [

'(-°□°)- ┬─┬',

'(╯°□°)╯ ]',

'(╯°□°)╯ ︵ ┻━┻',

'(╯°□°)╯ [',

'(╯°□°)╯ ┬─┬'

];

module.exports.run = async(bot, message, args) => {

message.delete()

const msg = await message.channel.send('(\\\\°□°)\\\\ ┬─┬');

for (const frame of frames) {

setTimeout(() => {}, 4000);

await msg.edit(frame);

}

return message;

}

module.exports.help= {

name: "tf"
} 
hotboi.01.05.2019
////emote-v2
    var args = args.join(" ")
     if(!args) return;
    var emoji = client.emojis.find(x => x.name.includes(args))
    if(!emoji) return;
    var id = emoji.id
    var name = client.emojis.find(x => x.id == id).name
    var gif = emoji.animated
    if(!gif){
    message.channel.send(`<:${name}:${id}>`)
    }else{
    message.channel.send(`<a:${name}:${id}>`)
    }
