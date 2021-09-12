const { GuildBan, Client, MessageEmbed } = require('discord.js');
const db = require('quick.db');

/**
 * 
 * @param {Client} client 
 * @param {GuildBan} ban 
 */

module.exports = async(client, ban) => {
    let niro = db.fetch(`NIRO_Protection_${ban.guild.id}`);
    if (niro == "on") {
        const entry = await ban.guild.fetchAuditLogs({
            type: 'BAN_MEMBER'
        }).then(audit => audit.entries.first());
        let author = entry.executor;
        let member = ban.guild.members.cache.get(author.id)
        if (member) member.ban({ reason: "Hacker!!. (Catched By NIRO Protection)" }).catch(err => { return })
    }
    let channelData = ban.guild.channels.cache.get(db.fetch(`Logs_${ban.guild.id}`));
    if (channelData) {
        const entry = await ban.guild.fetchAuditLogs({
            type: 'BAN_MEMBER'
        }).then(audit => audit.entries.first())
        let author = entry.executor;
        let embed = new MessageEmbed()
            .setAuthor('Ban Logs!!.', client.user.avatarURL({ dynamic: true }), 'https://discord.gg/developer-support')
            .setColor('DARK_GREY')
            .setDescription(`
            > Banned Name: ${ban.user.username}
            > Banned Id: ${ban.user.id}
            > Ban Reason: ${ban.reason || "no reason"}
            > Baner Name: ${author.username}
            > Baner Id: ${author.id}
    `)
            .setFooter('Logs');
        channelData.send({ embeds: [embed] })
    }
    require('../functions/guildBanAddFuction').get(ban, db);
};