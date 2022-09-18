const discord = require('discord.js')

module.exports = {
    name: "ajuda",
    category: "discord",
    run: async (client, message, args) => { 

        const regedit = new discord.MessageEmbed()
            .setColor(`#41ffff`)
            .setTitle(`Central de ajuda`)
            .setThumbnail('')
            .setImage('')
            .setDescription(`
            **Aqui estão os meus comandos:**
            
            __**Utilidade**__
            ➥ avatar - Ver seu avatar ou de outra pessoa.
            ➥ mcavatar - Ver o corpo da sua skin do minecraft.
            ➥ mchead - Ver a cabeça da sua skin do minecraft.
            ➥ ping - Ver seu ping.
            ➥ servericon - Ver o ícone do server.
            ➥ serverinfo - Ver as informações do server.
            ➥ botinfo - Ver as informações do bot.
            ➥ userinfo - Ver informações do usuário.
            ➥ sugestão - Você sugere algo para o servidor.

            __**🎉Diversão**__
            ➥ beijar - Você beija outra pessoa.
            ➥ corrida - Você aposta uma corrida com outra pessoa.
            ➥ tapa - Você da um tapa em outra pessoa. `)
        await message.channel.send(regedit)
    }
}