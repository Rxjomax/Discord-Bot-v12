const Discord = require("discord.js");
exports.run = (client, message, args) => {
    let user = message.mentions.users.first() || message.author

    let embed = new Discord.MessageEmbed()
        .setDescription(`[Clique aqui para baixar a sua imagem](${user.displayAvatarURL({ format: 'png' })}).`)
        .setImage(user.displayAvatarURL({ format: 'png', dynamic: true, size: 4096 }))
        .setColor("#41ffff")
    message.channel.send(embed)
}