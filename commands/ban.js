const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) {
    return message.channel.send({embed: {
      description: "*❌ Você precisa da permissão de `Banir Membros` para executar este comando*",
      color: "#ff0000"
    }})
  }
  if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) {
    return message.channel.send({embed: {
      description: "*❌ Eu preciso da permissão de `Banir Membros` para executar este comando*",
      color: "#ff0000"
    }})
  }
     let target = message.mentions.users.first()
   if(!target) {
     return message.channel.send({embed: {
       description: "*❌ Usuário não encontrado ou não mencionado!*",
       color: "#ff0000"
    }})
   }
   if(target.bannable) {
     return message.channel.send({embed: {
       description: "*❌ Você não pode banir este usuario*",
       color: "#ff0000"
     }})
   }
   if(target.id === message.author.id) {
    return message.channel.send({embed: {
       description: "❌ *Você não pode se banir seu bobo!*",
       color: "#ff0000"
     }})
   }
   let motivo = args.join(" ").slice(22)
   if(!motivo) {
     return message.channel.send({embed: {
       description: "*❌ Não especificou um motivo*",
       color: "#ff0000"
     }})
   }

   const fab = new MessageEmbed()
   .setTitle(`Membro Banido! `)
   .addField("Banido", `\`${target.tag}\``)
   .addField("Banido por", `\`${message.author.tag}\``)
   .addField("Motivo", `\`${motivo}\``)
   .setTimestamp()
   .setColor("#41ffff")
   message.channel.send(fab)

   message.guild.member(target.id).ban(target)

 const modl = new MessageEmbed()
 .setTitle(`Membro Banido!`)
 .addField("Banido", `\`${target.tag}\``)
 .addField("Banido por", `\`${message.author.tag}\``)
 .addField("Motivo", `\`${motivo}\``)
 .setTimestamp()
 .setColor("#41ffff")
channel.send(modl)
    
}
