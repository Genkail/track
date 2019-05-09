const Discord = module.require("discord.js");
module.exports.run = async (bot,message,args) => {
message.delete()
let prefix = ["!"]
const CustomArgs = message.content.slice(prefix.length + 13 + 1).split("; ")
let type = ["text","voice"]
if(type.indexOf(CustomArgs[1]) == -1) return bot.send("Я не могу создать канал с таким типом, используйте !createchannel <ИМЯ> <text или voice>")
if(!CustomArgs[0] | !CustomArgs[1]) return bot.send("У вас нет одного из значений!")
message.guild.createChannel(CustomArgs[0], CustomArgs[1])
};


module.exports.help = {
    name: "createchannel",
    aliases: []
};
