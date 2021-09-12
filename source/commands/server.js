const { Client, Message, Guild } = require("discord.js");


module.exports = {
    name: "server",
    aliases: [""],

    /**
     * 
     * @param {Client} client
     * @param {Message} message
     * @param {Guild} guild
     */

    run: async(client, message, args, prefix, lang, admins, servers, db, MessageEmbed) => {
        const text = message.guild.channels.cache.filter(r => r.type == "GUILD_TEXT").size;
        const voice = message.guild.channels.cache.filter(r => r.type == "GUILD_VOICE").size;
        const chs = message.guild.channels.cache.size;
        const roles = message.guild.roles.cache.size;
        const emojis = message.guild.emojis.cache.size;
        const online = message.guild.members.cache.filter(member => member.presence?.status === "online").size;
        var vlevel;
        const vlevelCheck = message.guild.verificationLevel;
        if (vlevelCheck === "NONE") vlevel = '0';
        if (vlevelCheck === "LOW") vlevel = '1';
        if (vlevelCheck === "MEDIUM") vlevel = '2';
        if (vlevelCheck === "HIGH") vlevel = '3';
        if (vlevelCheck === "VERY_HIGH") vlevel = '4';
        let embed = new MessageEmbed()
            .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
            .addFields({
                name: `🔠 Server Name`,
                value: message.guild.name,
                inline: true
            }, {
                name: `🆔 Server ID`,
                value: message.guild.id,
                inline: true
            }, {
                name: `📆 Created On`,
                value: moment(message.guild.createdAt).format("YYYY/MM/DD, HH:mm:ss a") + '\n' + moment(message.guild.createdAt, "YYYYMMDD").fromNow(),
                inline: true
            }, {
                name: `👑 Owner By`,
                value: '<@!' + message.guild.ownerId + '>',
                inline: true

            }, {
                name: `👥 Members (${message.guild.memberCount})`,
                value: `**` + online + `** Online | **` + message.guild.premiumSubscriptionCount + `** Boosts ✨`,
                inline: true
            }, {
                name: `💬 Channels (` + chs + `)`,
                value: `**` + text + `** Text | **` + voice + `** Voice`,
                inline: true
            }, {
                name: `🌍 Others`,
                value: `**Region:** ` + message.guild.region + `\n` + `**Verification Level:** ` + vlevel,
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
        message.reply({
            embeds: [embed],
            ephemeral: true
        });
    }
};