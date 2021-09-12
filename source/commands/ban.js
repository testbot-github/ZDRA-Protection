const { Client, Message, Guild } = require("discord.js");


module.exports = {
    name: "ban",
    aliases: [""],

    /**
     * 
     * @param {Client} client
     * @param {Message} message
     * @param {Guild} guild
     */

    run: async(client, message, args, prefix, lang, admins, db, MessageEmbed) => {
        let member = message.mentions.members.first() || client.users.cache.get(args[1]);
        if (!member) return;
        if (lang == "en") {
            if (member.bannable) {
                member.ban({ reason: args[2] || "no reason" });
                message.reply({ content: `> ✈️ **<@!${member.id}> Has Gote Banned Becouse: ${message.options.getString('reason') || "no reason"}**`, ephemeral: true })
            } else message.reply({ content: `> :x: **I Can't Ban <@!${member.id}>**`, ephemeral: true })
        } else if (lang == "ar") {
            if (member.bannable) {
                member.ban({ reason: args[2] || "no reason" });
                message.reply({ content: `> ✈️ **<@!${member.id}> حظر من السيرفر بسبب: ${message.options.getString('reason') || "no reason"}**`, ephemeral: true })
            } else message.reply({ content: `> :x: **لا يمكني حظر <@!${member.id}>**`, ephemeral: true })
        }
    }
};