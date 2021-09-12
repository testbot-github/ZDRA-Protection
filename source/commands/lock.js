const { Client, Message, Guild } = require("discord.js");


module.exports = {
    name: "lock",
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
            channel.overwritePermissions([{
                id: message.guild.roles.everyone.id,
                deny: ["SEND_MESSAGES"]
            }]);
            message.reply({ content: `> ✅ **This Channel Is Locked**`, ephemeral: true })
        } else if (lang == "ar") {
            channel.overwritePermissions([{
                id: message.guild.roles.everyone.id,
                deny: ["SEND_MESSAGES"]
            }]);
            message.reply({ content: `> ✅ **هاذه القناه مغلقه**`, ephemeral: true })
        }
    }
};