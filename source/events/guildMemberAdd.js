const { Client, GuildMember, MessageEmbed } = require('discord.js');
const db = require('quick.db');

/**
 * 
 * @param {Client} client 
 * @param {GuildMember} member 
 */

module.exports = async(client, member) => {
    require('../functions/guildMemberAddFunction').get(member, db);
    let channelData = member.guild.channels.cache.get(db.fetch(`Logs_${member.guild.id}`));
    if (channelData) {
        let embed = new MessageEmbed()
            .setAuthor('Member Add Logs!!.', client.user.avatarURL({ dynamic: true }), 'https://discord.gg/developer-support')
            .setColor('DARK_GREY')
            .setDescription(`
            > Member Name: ${member.user.username}
            > Member Id: ${member.user.id}
    `)
            .setFooter('Logs');
        channelData.send({ embeds: [embed] })
    }
};