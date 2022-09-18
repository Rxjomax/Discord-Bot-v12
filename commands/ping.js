const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  
  const embed = new Discord.MessageEmbed()
  .setDescription("🌐 **Calculando Ping...**")
  .setColor('##41ffff')
  message.channel.send(embed).then(msg => {
    setTimeout(() => {
      let ping = new Discord.MessageEmbed()
      .setTitle(`Ping`)
      .setThumbnail(message.author.displayAvatarURL())
      .setDescription(`**🛰️ Latência do bot** \`${Math.round(client.ws.ping)}ms\`\n**📡 Latência do Server** \`${msg.createdTimestamp - message.createdTimestamp}ms\``)
      .setFooter(`Comandos requisitado por ${message.author.tag}`)
      .setColor('#41ffff')
    msg.edit(ping)
    }, 1000)
  });
}