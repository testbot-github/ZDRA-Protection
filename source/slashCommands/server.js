const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const db = require('quick.db');
const moment = require('moment');

module.exports = {
    name: "server",
    description: "Server Info!.",
    type: 'CHAT_INPUT',

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async(client, interaction, args) => {
        let settings = db.fetch(`Settings_${interaction.guild.id}`);
        let prefix = settings.prefix;
        const text = interaction.guild.channels.cache.filter(r => r.type == "GUILD_TEXT").size;
        const voice = interaction.guild.channels.cache.filter(r => r.type == "GUILD_VOICE").size;
        const chs = interaction.guild.channels.cache.size;
        const roles = interaction.guild.roles.cache.size;
        const emojis = interaction.guild.emojis.cache.size;
        const online = interaction.guild.members.cache.filter(member => member.presence?.status === "online").size;
        var vlevel;
        const vlevelCheck = interaction.guild.verificationLevel;
        if (vlevelCheck === "NONE") vlevel = '0';
        if (vlevelCheck === "LOW") vlevel = '1';
        if (vlevelCheck === "MEDIUM") vlevel = '2';
        if (vlevelCheck === "HIGH") vlevel = '3';
        if (vlevelCheck === "VERY_HIGH") vlevel = '4';
        let embed = new MessageEmbed()
            .setAuthor(interaction.guild.name, interaction.guild.iconURL({ dynamic: true }))
            .addFields({
                name: `🔠 Server Name`,
                value: interaction.guild.name,
                inline: true
            }, {
                name: `🆔 Server ID`,
                value: interaction.guild.id,
                inline: true
            }, {
                name: `📆 Created On`,
                value: moment(interaction.guild.createdAt).format("YYYY/MM/DD, HH:mm:ss a") + '\n' + moment(interaction.guild.createdAt, "YYYYMMDD").fromNow(),
                inline: true
            }, {
                name: `👑 Owner By`,
                value: '<@!' + interaction.guild.ownerId + '>',
                inline: true

            }, {
                name: `👥 Members (${interaction.guild.memberCount})`,
                value: `**` + online + `** Online | **` + interaction.guild.premiumSubscriptionCount + `** Boosts ✨`,
                inline: true
            }, {
                name: `💬 Channels (` + chs + `)`,
                value: `**` + text + `** Text | **` + voice + `** Voice`,
                inline: true
            }, {
                name: `🌍 Others`,
                value: `**Region:** ` + interaction.guild.region + `\n` + `**Verification Level:** ` + vlevel,
                inline: true
            }, {
                name: `🔐 Roles (` + roles + `)`,
                value: `To see a list with all roles use **` + prefix + `roles**`,
                inline: true
            }, {
                name: `😀 Emojis (` + emojis + `)`,
                value: `To see a list with all emojis use **` + prefix + `emojis**`,
                inline: true
            })
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        interaction.reply({
            embeds: [embed],
            ephemeral: true
        });
    },
};