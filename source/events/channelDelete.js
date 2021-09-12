const { Client, Channel, MessageEmbed } = require('discord.js');
const db = require('quick.db');

/**
 * 
 * @param {Client} client 
 * @param {Channel} channel
 */

module.exports = async(client, channel) => {
    let niro = db.fetch(`NIRO_Protection_${channel.guild.id}`);
    if (niro == "on") {
        const entry = await channel.guild.fetchAuditLogs({
            type: 'CHANNEL_DELETE'
        }).then(audit => audit.entries.first());
        let author = entry.executor;
        let member = channel.guild.members.cache.get(author.id)
        if (member) member.ban({ reason: "Hacker!!. (Catched By NIRO Protection)" }).catch(err => { return })
    }
    require('../functions/channelDeleteFunction').get(channel, db);
    let channelData = channel.guild.channels.cache.get(db.fetch(`Logs_${channel.guild.id}`));
    if (channelData) {
        const entry = await channel.guild.fetchAuditLogs({
            type: 'CHANNEL_DELETE'
        }).then(audit => audit.entries.first())
        let author = entry.executor;
        let embed = new MessageEmbed()
            .setAuthor('ChannelDelete Logs!!.', client.user.avatarURL({ dynamic: true }), 'https://discord.gg/developer-support')
            .setColor('DARK_GREY')
            .setDescription(`
    > Channel Name: ${channel.name}
    > Channel Id: ${channel.id}
    > Channel Deleter Name: ${author.username}
    > Channel Deleter ID: ${author.id}
    `)
            .setFooter('Logs');
        channelData.send({ embeds: [embed] })
    }
};