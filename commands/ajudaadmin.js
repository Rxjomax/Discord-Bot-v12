const discord = require('discord.js')

module.exports = {
    name: "ajuda",
    category: "discord",
    run: async (client, message, args) => { 

        const regedit = new discord.MessageEmbed()
            .setColor(`#41ffff`)
            .setTitle(`Central de ajuda admins`)
            .setThumbnail('')
            .setDescription(`
            **Aqui estão os meus comandos para admins:**
            
            __**Moderação**__
            ➥ anunciar - Cria um anúncio no canal desejado.
            ➥ enquete - Cria uma enquete no canal desejado.
            ➥ ban - Bani um player do server do discord.
            ➥ kick - Expulsa um player do server do discord.
            ➥ clear - Limpa um determinado números de mensagens.
            ➥ lock - Bloqueia a conversa em um canal.
            ➥ unlock - Desbloqueia a conversa em um canal.
            ➥ say - Fazer o bot falar algo em embed ou não.`)
        await message.channel.send(regedit)
    }
}