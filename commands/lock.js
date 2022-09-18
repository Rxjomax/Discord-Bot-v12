const Discord = require("discord.js");

exports.run = async (bot,message,args) => {
    if (!message.member.roles.cache.has('Furyon') && !message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send("Você não tem permissão para executar esse comando!");
    }
    
    const channel  = message.mentions.channels.first() || message.channel;
    const roles    = message.guild.roles.cache;
    const everyone = roles.find(role => role.name === "@everyone");

    await channel.overwritePermissions([
        {
            id: everyone,
            deny: ["SEND_MESSAGES"]
        }
    ]);

    const msg = new Discord.MessageEmbed()
        .setColor("#41ffff")
        .setTitle('Chat fechado!')
        .setDescription(`Canal bloqueado! **[<#${channel.id}>]**`)

    return message.channel.send(msg);
};