const Discord = require("discord.js");

module.exports = {
  config: {
      name: "servericon",
      aliases: ['servericon'],
      description: "Comando para pegar a foto do servidor.",
      example: "!servericon",
      usage: '!servericon'
  },
  run: async (bot, message, args) => {

        let icone = new Discord.MessageEmbed()
        .setDescription(`**Clique [aqui](${message.guild.iconURL()}) para baixar o ícone do servidor!**`)
        .setImage(message.guild.iconURL({ dynamic: true, size: 2048 }))

  } 
}