const { Client, Message, Guild } = require("discord.js");


module.exports = {
    name: "kick",
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
            if (member.kickable) {
                member.kick({ reason: "no reason" });
                message.reply({ content: `> ✈️ **<@!${member.id}> Has Gote Kicked Becouse: ${message.options.getString('reason') || "no reason"}**`, ephemeral: true })
            } else message.reply({ content: `> :x: **I Can't Kick <@!${member.id}>**`, ephemeral: true })
        } else if (lang == "ar") {
            if (member.bannable) {
                member.kick({ reason: "no reason" });
                message.reply({ content: `> ✈️ **<@!${member.id}> طرد من السيرفر بسبب: ${message.options.getString('reason') || "no reason"}**`, ephemeral: true })
            } else message.reply({ content: `> :x: **لا يمكني طرد <@!${member.id}>**`, ephemeral: true })
        }
    }
};