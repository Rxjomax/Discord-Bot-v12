const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Novo ping em: ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); 

//Pagina da web de ping
//----------------------------------------------------------------------------------------

const Discord = require("discord.js");
const db = require("quick.db"); 
const Enmap = require('enmap');
const fs = require('fs')
const client = new Discord.Client({partials: ["MEMBER", "MESSAGE", "CHANNEL", "USER", "REACTION"]});
const config = require("../config.json"); 
const disbut = require('discord-buttons')(client);

//consts e requires
//----------------------------------------------------------------------------------------

fs.readdir('./events/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split('.')[0];
        client.on(eventName, event.bind(null, client));
    });
});

client.commands = new Enmap();

fs.readdir('./commands/', (err, files) => {
  if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith('.js')) return;
        let props = require(`./commands/${file}`);
          let commandName = file.split('.')[0];

                      //console

      console.log(`Analisando comando da pasta: "${commandName}"`);
      client.commands.set(commandName, props);
      console.log(`inicilizando comando...`);
    });
});


client.on("guildMemberAdd", async (member) => { 

  let guild = await client.guilds.cache.get("926274582036496414");
  let channel = await client.channels.cache.get("927055931987083274");
  if (guild != member.guild) {
    return console.log("Sem boas-vindas pra você!");
   } else {
      let embed = await new Discord.MessageEmbed()
      .setColor("#41ffff")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`Boas-vindas`)
      .setImage("")
      .setDescription(`Olá **${member.user}**,seja bem vindo ao **${guild.name}**! Atualmente estamos com **${member.guild.memberCount} membros**.`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setFooter("Rede Flat • © Todos os direitos reservados.")
      .setTimestamp();

    channel.send(embed);
  }
});

client.on('guildMemberAdd', member => {
  member.roles.add("927089699305189397"); // Coloque o id do cargo
})

client.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.channel.type == 'dm') return msg.reply('')
  if (msg.content == `<@!${client.user.id}` || msg.content == `<@!${client.user.id}>`)  {
  let embed1 = new Discord.MessageEmbed()
  .setTitle(`😄 Rede Flat!`)
  .setColor(`#41ffff`)
  .setThumbnail('')
  .setDescription(`
>  » Sou o bot oficial da Rede Flat.
>  » Meu prefixo é **.**.
>  » Use **.ajuda** para ver meus comandos.
  `)
  .setFooter(`Aproveite o servidor.`)
  msg.channel.send(embed1)
} 
});
//---------------------------------------------------------------------------------------

//----------------------------------------------------------

client.on('ready', () => {
  let palavras = [
    `Bot Desenvolvido por João Matheus#2464`
  ]
  inc = 0
  setInterval(() => client.user.setActivity(`${palavras[inc++ % palavras.length]}`, {type: `PLAYING`}), 1000 * 10)
})

const { MessageButton, MessageActionRow } = require('discord-buttons')

const embed = new Discord.MessageEmbed()
.setTitle("Suporte")
.setDescription('Aguarde um pouco e um staff irá entrar em contato com você futuramente.\n\n Clique em **📩 Fechar Ticket** para fechar o suporte.')
.setColor('GREEN')
let botao = new MessageButton()
.setStyle('gray')
.setLabel('Fechar Ticket')
.setEmoji('📩')
.setID('ticketclose')
const row = new MessageActionRow()
.addComponent(botao)

client.on("clickButton", async (button) => {
    if(button.id == 'loja') {
        const member = button.clicker.member
        const canal = member.guild.channels.cache.find(ch => ch.name === `Financeiro`);
        button.reply.send(`${member} Seu ticket atual já está aberto em: ${canal}!`).then(msg => msg.delete({timeout: 15000}));
        member.guild.channels.create(`Financeiro`, {
            type : 'text',
            permissionOverwrites : [
                {
                    id : member.guild.id,
                    deny : ['VIEW_CHANNEL']
                },
                {
                    id : member.id,
                    allow : ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES']
                },
                {
                    id : "927058371461414952",
                    allow : ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES']
                }
            ]
        }).then(async channel => {
            channel.send(`Olá ${member}, este é o seu ticket!`)
            channel.send(embed, botao, row)
        })
    }})
    
client.on("clickButton", async (button) =>{
        if(button.id == 'ticketclose') {
            const member = button.clicker.member
            const channel = member.guild.channels.cache.find(ch => ch.name === `ticket-${member.user.username}`)    
            button.reply.send('Fechando ticket em 10 segundos')
  
            setTimeout(() => {
              button.channel.delete()
              }, 10000)
              }
            }
          )

const embed2 = new Discord.MessageEmbed()
.setTitle("Suporte")
.setDescription('Aguarde um pouco e um staff irá entrar em contato com você futuramente.\n\n Clique em **📩 Fechar Ticket** para fechar o suporte.')
.setColor('GREEN')
let botao2 = new MessageButton()
.setStyle('gray')
.setLabel('Fechar Ticket')
.setEmoji('📩')
.setID('ticketclose')
const row2 = new MessageActionRow()
.addComponent(botao)

client.on("clickButton", async (button) => {
    if(button.id == 'duvida') {
        const member = button.clicker.member
        const canal = member.guild.channels.cache.find(ch => ch.name === `Dúvida`);
        button.reply.send(`${member} Seu ticket atual já está aberto em: ${canal}!`).then(msg => msg.delete({timeout: 15000}));
        member.guild.channels.create(`Dúvida`, {
            type : 'text',
            permissionOverwrites : [
                {
                    id : member.guild.id,
                    deny : ['VIEW_CHANNEL']
                },
                {
                    id : member.id,
                    allow : ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES']
                },
                {
                    id : "927058371461414952",
                    allow : ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES']
                }
            ]
        }).then(async channel => {
            channel.send(`Olá ${member}, este é o seu ticket!`)
            channel.send(embed2, botao2, row2)
        })
    }})
    
client.on("clickButton", async (button) =>{
        if(button.id == 'ticketclose') {
            const member = button.clicker.member
            const channel = member.guild.channels.cache.find(ch => ch.name === `ticket-${member.user.username}`)    
            button.reply.send('Fechando ticket em 10 segundos')
  
            setTimeout(() => {
              button.channel.delete()
              }, 10000)
              }
            }
          )


client.login(process.env.TOKEN); //conexão com o token no docu