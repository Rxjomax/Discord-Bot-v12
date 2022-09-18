const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    let splitarg = args.join(" ").split(" / ");
    let aEnquete = splitarg[0];

    if(!message.member.hasPermission("MANAGE_MESSAGES")){
        message.channel.send("Você não tem permissão para anúnciar no servidor!")
        return;
    }

    if(args.length === 0){
        return message.reply("Utilize: r!enquete <mensagem>");
    }

    if(!aEnquete){
        message.channel.send("Coloque uma mensagem para ser enviada.")
        return;
    }

    let Embed = new Discord.MessageEmbed()
    .setTitle("Rede Flat - Enquete")
    .setColor("#41ffff")
    .setImage('')
    .setDescription(aEnquete)

    try{
    let logChannel = message.guild.channels.cache.find(cl => cl.id == "926274582036496417" && cl.type == "text")
    if (!logChannel) return message.channel.send("O canal não existe");
        
    logChannel.send(Embed).then(async msg => {
        await msg.react("✅")
        await msg.react("⛔")
    })
    logChannel.send("@everyone");

    } catch (error){
        console.log(error);
    }
}

module.exports.info = {
    name: "enquete"
}