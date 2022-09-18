const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
        
    await message.author.createDM()

    message.channel.send(`${message.author} olhe seu privado!`)
                const embed = new Discord.MessageEmbed()
                    .setTitle('⚡ **Sugestão** ⚡')
                    .setDescription(`${message.author} Bem-vindo ao nosso sistema sugestão, responda as seguintes perguntas para enviar sua sugestão.
                    \nPara cancelar a sugestão digite \`cancelar\` a qualquer momento no chat.
                    \nPara continuar digite \`continuar\` para iniciar as perguntas.`)
                    .setColor('#41ffff')
                    .setTimestamp()
                    .setFooter(`${message.author.username}`, message.author.avatarURL())
                message.author.send(embed)


                var main = message.author.dmChannel.createMessageCollector(a => a.author.id == message.author.id, {
                    time: 100000 * 50,
                    max: 1
                })

                main.on('collect', a => {
                    const pergun1 = new Discord.MessageEmbed()
                        .setColor("#41ffff")
                        .setDescription(`**Processo 1/2** 
                                                \`\`\`Qual o seu nick?\`\`\` `)

                    if (a.content.toLowerCase() === "cancelar") return message.author.send('O processo de sugestão foi cancelado.');
                    if (a.content.toLowerCase() === "continuar") message.author.send(pergun1)

                    var prg2 = message.author.dmChannel.createMessageCollector(b => b.author.id == message.author.id, {
                        time: 100000 * 50,
                        max: 1
                    })

                    prg2.on('collect', b => {
                        if (b.content.toLowerCase() === "cancelar") return message.author.send('O processo de sugestão foi cancelado.');
                        let n1 = b.content
                        const pergun2 = new Discord.MessageEmbed()
                            .setColor("#41ffff")
                            .setDescription(`**Processo 2/2** 
                                                    \`\`\`Qual sua sugestão?\`\`\``)
                        message.author.send(pergun2)

                                    var fim = message.author.dmChannel.createMessageCollector(d => d.author.id == message.author.id, {
                                        time: 100000 * 50,
                                        max: 1
                                    })
                                    fim.on('collect', f => {
                                        let n2 = f.content

                                        const fimn = new Discord.MessageEmbed()
                                            .setColor("#41ffff")
                                            .setDescription(`Sucesso! 
                    \`\`\`Obrigado por mandar sua sugestão :)!\`\`\``)
                                        message.author.send(fimn)

                let log = new Discord.MessageEmbed()
                .setColor("#41ffff")
                .setTitle(`Rede Flat - Nova sugestão`)
                .addField("👤 Enviado por", `${message.author}`)
                .addField("🖥️ Nick:",`\`\`\`${n1}\`\`\``)
                .addField("📑 Mensagem",`\`\`\`${n2}\`\`\``)
                .setFooter("Para sugestões use .sugestão")
                .setThumbnail('')
                .setTimestamp()
                var canal = message.guild.channels.cache.find(ch => ch.id === `929090166411395142`)
                
                canal.send(log).then(async msg => {
                    await msg.react("✅")
                    await msg.react("⛔")
                })
            })
        })
    })
}

module.exports.info = {
    name: "sugerir"
}