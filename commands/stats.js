const Discord = require('discord.js');
const config = require('../config.json');
const os = require('os');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let servercount = client.guilds.cache.size;
    let usercount = client.users.cache.size;
    let channelscount = client.channels.cache.size;
    let arch = os.arch();
    let platform = os.platform();
    let shard = client.ws.shards.size;
    let NodeVersion = process.version;
    let cores = os.cpus().length;

    let stats = new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }), 'https://github.com/fekt/discord-giveaway-bot')
    .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
    .setTitle(`📊Status of ${client.user.username}`)
	.setURL('https://discord.com/oauth2/authorize?client_id=788669038632239104&permissions=8&scope=bot')
    .setColor('09FF00')
    .addField("Server Count:", `${servercount}`, true)
    .addField("Users Count:", `${usercount}`, true)
    .addField("Channel's Count:", `${channelscount}`, true)
    .addField('Architecture:', `${arch}`, true)
    .addField('Platform:', `${platform}`, true)
    .addField('Node-Version:', `${NodeVersion}`, true)
    .addField('Shards:', `${shard}`, true)
    .addField('Cores:', `${cores}`, true)
    .setTimestamp()
    .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL());
    message.channel.send(stats);
};

module.exports.help = {
    name: "stats"
}
