const Discord = require("discord.js")
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
if(!message.member.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"])) return message.channel.send({embed: {
  description: "*❌ Você precisa da permissão de `Kikar Membros` para executar este comando*",
  color: "#ff0000"
}})
if(!message.guild.me.hasPermission(["KICK.MEMBERS", "AMINISTRATOR"])) return message.channel.send({embed: {
  description: "*❌ Eu preciso da permissão de `Kikar Membros` para executar este comando*",
  color: "#ff0000"
}})

let member = message.mentions.users.first()
let user = message.mentions.users.first()
if(!member) return message.channel.send({embed: {
  description: "*❌ Mencione um usuario para eu poder kicka-lo*",
  color: "#ff0000"
}})

let motivo = args.slice(1).join(" ")
if(!motivo) return message.channel.send({embed: {
  description: "*❌ Dê um motivo para kickar o user*",
  color: "#ff0000"
}})

message.guild.member(member).kick(motivo)

const kick = new Discord.MessageEmbed()
.setTitle("Membro kickado")
.addField("Kickado", `\`${user.tag}\``)
.addField("Staff", `\`${message.author.tag}\``)
.addField("Motivo", `\`${motivo}\``)
.setColor("#41ffff")
.setFooter("kick Efetuado", message.author.displayAvatarURL())
message.channel.send(kick)

const modl = new Discord.MessageEmbed()
.setAuthor("Membro kickado", message.guild.iconURL())
.addField("Expulso", `\`${user.tag}\``)
.addField("Expulso por", `\`${message.author.tag}\``)
.addField("Motivo", `\`${motivo}\``)
.setTimestamp()
.setColor("#41ffff")
channel.send(modl)

}