const Discord = require('discord.js')
const { MessageButton, MessageActionRow } = require('discord-buttons')

module.exports= {
name: 'setup',
run: (client, message, args) => {
if(!message.member.hasPermission(["ADMINISTRATOR"])) return message.channel.send({embed: { title: `❌ Ocorreu um erro`  , description: `${message.author} Você não possui a permissão de \`Administrador\` para executar este comando`, color: "FF0000"}}).then(msg => msg.delete({timeout: 15000}))

    const embed = new Discord.MessageEmbed()
    .setTitle("Central de Atendimento")
    .setDescription('Olá, seja bem-vindo a central de atendimento da Rede Flat.\nSelecione a opção que mais se encaixa com o que você deseja.\n\nPara iniciar seu suporte basta selecionar o departamento.\n\n**Departamentos:**\n🛒 | Loja\n🔎 | Dúvidas')
    .setColor('GREEN')
    .setFooter("©Rede Flat")
    let button = new MessageButton()
    .setStyle('green')
    .setLabel('Loja')
    .setEmoji('🛒')
    .setID('loja')
    let button2 = new MessageButton()
    .setStyle('gray')
    .setLabel('Dúvidas')
    .setEmoji('🔎')
    .setID('duvida')
    const row = new MessageActionRow()
    .addComponent(button)
    .addComponent(button2)
    message.channel.send(embed, (button,button2, row));

}}