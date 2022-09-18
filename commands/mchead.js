const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    let reason = args.slice(0).join(' ');
    if (reason.length < 1) return message.reply('**Cite um nick de minecraft**')

    let embed = new Discord.MessageEmbed()

        .setTitle(`Cabeça de ${args[0]}`)
        .setImage(`https://mc-heads.net/head/${args[0]}`)
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp(new Date())
        .setColor('#41ffff')
    message.channel.send(embed)
}

exports.help = {
    name: 'mchead'
}