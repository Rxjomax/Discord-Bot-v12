const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")){
    return message.reply("Você não tem permissão para apagar mensagens! ```MENAGE_MESSAGES```")
    }

    let mensagemDeletar = args.slice(0).join(" ");

    if(mensagemDeletar < 2 || mensagemDeletar > 100) {
        let Embed = new Discord.MessageEmbed()
        .setTitle("**Rede Flat**")
        .setColor("#4169E1")
        .setDescription("Para apagar mensagens com o comando 'limpar' você tem que escrever conforme o exemplo:\n\n-limpar <número de mensagens a serem apagadas\n\nOBS: Não posso apagar mensagens que foram envidas há mais de duas semanas, por limitações do próprio Discord.")
        message.channel.send(message.author, Embed)
        return;
    }

    if(args.length === 0) return message.reply(Embed);
    if(isNaN(args[0])) return message.reply(Embed);

    try{
        message.channel.bulkDelete(mensagemDeletar);
        message.channel.send(`Chat foi limpo por ${message.author}. Foram limpas ${mensagemDeletar} mensagens.`);
    } catch(e){
        console.log(e);
    }
}

module.exports.info = {
    name: "limpar"
}