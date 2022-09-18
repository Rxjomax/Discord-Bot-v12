const db = require('quick.db');
const Discord = require("discord.js");
const jimp = require("jimp");
const ms = require('ms');
const Canvas = require('canvas');

exports.run = async (client, message, args) => {

	if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply(`Apenas administradores podem utilizar esse comando!`)
					
	if ((args[0] == 'Normal')||(args[0] == 'normal')) {
		message.channel.send(`**Em qual canal gostaria de postar?**`).then(m3 => {
			let cp = message.channel.createMessageCollector(x => x.author.id === message.author.id, {max: 1})
			.on('collect', c => {
				canal = c.mentions.channels.first()
				message.channel.send(`**Digite a mensagem que deseja enviar.**`).then(m3 => {
					let nm = message.channel.createMessageCollector(x => x.author.id === message.author.id, {max: 1})
					.on('collect', c => {
						mensagem = c.content
						
						canal.send(mensagem)
						message.channel.send(`*Mensagem enviada com sucesso ao canal ${canal}*`)
					})
				})
			})
		})
	}
	else if ((args[0] == 'Embed')||(args[0] == 'embed')) {	
		message.channel.send(`**Em qual canal gostaria de postar?**`).then(m3 => {
			let cp = message.channel.createMessageCollector(x => x.author.id === message.author.id, {max: 1})
			.on('collect', c => {
				canal = c.mentions.channels.first()
				if (!canal) {
					message.reply(`**Mencione um canal!**`)
				}
				else {
					message.channel.send(`**Qual o título da embed?**`).then(m2 => { 
						let cp = message.channel.createMessageCollector(x => x.author.id === message.author.id, {max: 1})
						
						.on('collect', c => {
							titulo = c.content

							message.channel.send(`**Qual a descrição da embed?**`).then(m3 => {
								let cd = message.channel.createMessageCollector(x => x.author.id === message.author.id, {max: 1})
								
								.on('collect', c => {
									descrição = c.content

									message.channel.send(`**Qual a thumbnail da embed? \n caso não queira uma thumbnail digite:** `);
									
									message.channel.send(`https://i.imgur.com/ZwLaa1O.png. `).then(m3 => {
										let vr = message.channel.createMessageCollector(x => x.author.id === message.author.id, {max: 1})
										
										.on('collect', c => {
											thumb = c.content

											message.channel.send(`**Qual a imagem debaixo da embed? \n caso não queira uma thumbnail digite:**`);
											
											message.channel.send(`https://i.imgur.com/avmEHuI.png. `).then(m3 => {
												let vr = message.channel.createMessageCollector(x => x.author.id === message.author.id, {max: 1})
												
												.on('collect', c => {
													imagem = c.content

													message.channel.send(`**Qual o footer da embed?**`).then(m3 => {
														let dc = message.channel.createMessageCollector(x => x.author.id === message.author.id, {max: 1})
														
														.on('collect', c => {
															footer = c.content

															message.channel.send(`**Qual a cor da embed?\n Exemplo: 123456 (RGB)**`).then(m3 => {
																let kv = message.channel.createMessageCollector(x => x.author.id === message.author.id, {max: 1})
																.on('collect', c => {
																	color = c.content
																			
																			let embedir = new Discord.MessageEmbed()
																			.setTitle(`${titulo}`)
																			.setDescription(`${descrição}`)
																			.setFooter(`${footer}`)
																			.setThumbnail(`${thumb}`)
																			.setImage(`${imagem}`)
																			.setColor(`#${color}`)
																			.setTimestamp()
																			
																			message.channel.send(`**Pré-visualização:**`,embedir)
																			
																			message.channel.send(`**Deseja postar este Embed no canal ${canal}?**`).then(m3 => {
																				let dcs = message.channel.createMessageCollector(x => x.author.id === message.author.id, {max: 1})
																				.on('collect', c => {
																					decision = c.content
																					
																					if (decision == 'Sim' ) {
																						canal.send(embedir)
																						message.channel.send(`*Mensagem enviada com sucesso ao canal ${canal}*`)	
																					}else if (decision == 'Não'){
																						message.channel.send(`**Então crie novamente o embed, digite .say**`)
																					}
																				})
																			})
																})
															})
														})
													})
												})
											})
										})
									})
								})
							})
						})
					})
				}
			})
		})
	}
	else {
		message.reply(`**Use corretamente o comando:** \n .say [Normal / Embed]`)
	}
}