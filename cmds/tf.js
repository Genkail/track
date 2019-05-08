const Discord = require("discord.js");

const bot = new Discord.Client();

const frames = [

'(-°□°)- ┬─┬',
  
'(-°□°)- ┬─┬',

'(╯°□°)╯ ]',
  
'(╯°□°)╯ ]',

'(╯°□°)╯ ︵ ┻━┻',
  
'(╯°□°)╯ ︵ ┻━┻',

'(╯°□°)╯ [',
  
'(╯°□°)╯ [',

'(╯°□°)╯ ┬─┬'
  
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
