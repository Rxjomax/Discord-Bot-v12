const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
     'https://i.imgur.com/sGVgr74.gif',
     'https://i.imgur.com/8LKPbOf.gif',
     'https://i.imgur.com/TItLfqh.gif',
     'https://i.imgur.com/wQjUdnZ.gif',
     'https://i.imgur.com/lmY5soG.gif',
     'https://i.imgur.com/YbNv10F.gif',
     'https://i.imgur.com/KLVAl0T.gif',
     'https://i.imgur.com/IgGumrf.gif',
     'https://i.imgur.com/KKAMPju.gif',
     'https://i.imgur.com/e0ep0v3.gif', 
     'https://i.imgur.com/0WWWvat.gif',
     'https://i.imgur.com/MGdlYsj.gif',
     'https://i.imgur.com/f86DzYb.gif',
     'https://i.imgur.com/4h7uBat.gif',
     'https://i.imgur.com/YOQgZqY.gif',
     'https://i.imgur.com/s3DggdT.gif',
     'https://i.imgur.com/KWM6eIB.gif',
     'https://i.imgur.com/709chb9.gif',
     'https://i.imgur.com/YkrEkbF.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para beijar!');
}
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setColor("#41ffff")
        .setDescription(`${message.author} beijou ${user}`)
        .setImage(rand)
  await message.channel.send(embed);
}