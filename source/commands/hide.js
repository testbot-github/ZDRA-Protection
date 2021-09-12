const { Client, Message, Guild } = require("discord.js");


module.exports = {
    name: "hide",
    aliases: [""],

    /**
     * 
     * @param {Client} client
     * @param {Message} message
     * @param {Guild} guild
     */

    run: async(client, message, args, prefix, lang, admins, servers, db, MessageEmbed) => {
        let channel = message.channel;
        if (message.mentions.channels.first() || client.channels.cache.get(args[1])) channel = message.guild.channels.cache.get(message.options.getChannel('channel').id)
        if (lang == "en") {
            channel.permissionOverwrites.create(channel.guild.roles.everyone, { VIEW_CHANNEL: false });
            message.reply({ content: `> ✅ **This Channel Is Hiden**`, ephemeral: true });
        } else if (lang == "ar") {
            channel.permissionOverwrites.create(channel.guild.roles.everyone, { VIEW_CHANNEL: false });
            message.reply({ content: `> ✅ **هاذه القناه مخفيه**`, ephemeral: true });
        }
    }
};