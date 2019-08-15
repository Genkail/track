const Discord = require("discord.js");
const db = require("quick.db")
module.exports.run = async (bot, message, args) => {
if (message.author.id == "428464195458170881")return bot.send("У тебя есть доступ... Но слушать тебя не буду");
    if ( message.author.id !=="267967915855314944") return bot.send("<a:zarezhy:609363605032534016>");
message.delete().catch();

    try {
        let codein = args.join(" ");
        let code = eval(codein);

        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        let embed = new Discord.RichEmbed()
        .setAuthor('Eval')
        .setColor('RANDOM')
        .addField(':inbox_tray: До', `\`\`\`js\n${codein}\`\`\``)
        .addField(':outbox_tray: После', `\`\`\`js\n${code}\n\`\`\``)
let guild = bot.guilds.get("603486182814515206")
        let rpchannel = guild.channels.find('name', 'eval')
rpchannel.send(embed)
    } catch(e) {
        message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
    }
}

module.exports.help= {
    name: 'eval',

    aliases: ["ebal"]

}