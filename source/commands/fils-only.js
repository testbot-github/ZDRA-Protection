const { Client, Message, Guild } = require("discord.js");


module.exports = {
    name: "fils-only",
    aliases: [""],

    /**
     * 
     * @param {Client} client
     * @param {Message} message
     * @param {Guild} guild
     */

    run: async(client, message, args, prefix, lang, admins, db, MessageEmbed) => {
        let channel = message.mentions.channels.first() || client.channels.cache.get(args[1]) || message.channel;
        if (lang == "ar") {
            db.set(`FilesOnly_${message.guild.id}`, channel);
            message.reply({ content: `> :white_check_mark: **تم أتخاذ قناة <#${channel.id}> لتكون للمفات فقط!.**` });
        } else if (lang == "en") {
            db.set(`FilesOnly_${message.guild.id}`, channel); // براعية احمد حناكه!!.
            message.reply({ content: `> :white_check_mark: **<#${channel.id}> has been set to be files only!.**` });
        }
    }
};