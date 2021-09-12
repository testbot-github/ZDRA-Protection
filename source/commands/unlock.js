const { Client, Message, Guild } = require("discord.js");


module.exports = {
    name: "unlock",
    aliases: [""],

    /**
     * 
     * @param {Client} client
     * @param {Message} message
     * @param {Guild} guild
     */

    run: async(client, message, args, prefix, lang, admins, db, MessageEmbed) => {
        let channel = message.channel;
        if (message.options.getChannel('channel')) channel = message.guild.channels.cache.get(message.options.getChannel('channel').id)
        if (lang == "en") {
            channel.permissionOverwrites.create(channel.guild.roles.everyone, { SEND_MESSAGES: true });
            message.reply({ content: `> ✅ **This Channel Is Unlocked**`, ephemeral: true })
        } else if (lang == "ar") {
            channel.permissionOverwrites.create(channel.guild.roles.everyone, { SEND_MESSAGES: true });
            message.reply({ content: `> ✅ **هاذه القناه مفتوحه**`, ephemeral: true })
        }
    }
};