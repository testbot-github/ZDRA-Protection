const { Client, Message, Guild } = require("discord.js");


module.exports = {
    name: "show",
    aliases: [""],

    /**
     * 
     * @param {Client} client
     * @param {Message} message
     * @param {Guild} guild
     */

    run: async(client, message, args, prefix, lang, admins, db, MessageEmbed) => {
        let channel = message.channel;
        if (message.mentions.channels.first() || client.channels.cache.get(args[1])) channel = message.guild.channels.cache.get(message.mentions.channels.first() || client.channels.cache.get(args[1]))
        if (lang == "en") {
            channel.permissionOverwrites.create(channel.guild.roles.everyone, { VIEW_CHANNEL: true });
            message.reply({ content: `> ✅ **This Channel Is Showen**`, ephemeral: true })
        } else if (lang == "ar") {
            channel.permissionOverwrites.create(channel.guild.roles.everyone, { VIEW_CHANNEL: true });
            message.reply({ content: `> ✅ **هاذه القناه ظاهره**`, ephemeral: true })
        }
    }
};