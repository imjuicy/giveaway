const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let help = new Discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }), 'https://github.com/fekt/discord-giveaway-bot')
	  .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
      .setTitle("Invite Link")
	  .setURL('https://discord.com/api/oauth2/authorize?client_id=788669038632239104&permissions=8&scope=bot')
	  .setColor('09FF00')
      .addField("Usage:","start [Channel] [Time] [Winners] [Prize]\nreroll [Prize name]\nend [Prize name]")
      .addField("Example:", "g!start #giveaway 30m 1 Example\ng!end Example\ng!reroll Example")
      .addField("Fun:", "ping, invite", true)
      .addField("Info:", "stats", true)
      .setTimestamp()
      .setFooter('Made by Tenz#0001', client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
    message.channel.send("**You Have A Message 🔔, Check Your DMs!**");

    return message.author.send(help);
}

module.exports.help = {
  name: "help"
}
