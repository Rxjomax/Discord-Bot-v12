const Discord = require ("discord.js")

module.exports = {
    name: "mcavatar",
    description: "O bot vai mandar a cabeça do minecraft de algum player!",
    author: "srrafah",

    run: async(client, message, args) => {

        let embed = new Discord.MessageEmbed()
        .setTitle(`🍃 Avatar do minecraft de: ${args[0]}`)
        .setImage(`https://mc-heads.net/body/${args[0]}`)
        .setColor("#41ffff")
        .setTimestamp()

        message.channel.send(embed)
  
    }
}