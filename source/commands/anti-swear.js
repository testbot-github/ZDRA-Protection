const { Client, Message, Guild } = require("discord.js");


module.exports = {
    name: "anti-swear",
    aliases: [""],

    /**
     * 
     * @param {Client} client
     * @param {Message} message
     * @param {Guild} guild
     */

    run: async(client, message, args, prefix, lang, admins, db, MessageEmbed) => {
        if (lang == "ar") {
            let toggle = db.fetch(`AntiSwear_${message.guild.id}`);
            if (toggle == null) return db.set(`AntiSwear_${message.guild.id}`, "on") && message.reply({ content: "> ✅ **حماية السب مفعله**", ephemeral: true });
            else if (toggle == "on") return db.set(`AntiSwear_${message.guild.id}`, "off") && message.reply({ content: "> ✅ **حماية السب معطله**", ephemeral: true });
            else if (toggle == "off") return db.set(`AntiSwear_${message.guild.id}`, "on") && message.reply({ content: "> ✅ **حماية السب مفعله**", ephemeral: true });
        } else if (lang == "en") {
            let toggle = db.fetch(`AntiSwear_${message.guild.id}`);
            if (toggle == null) return db.set(`AntiSwear_${message.guild.id}`, "on") && message.reply({ content: "> ✅ **Anti-Swear Portiction Is Active**", ephemeral: true });
            else if (toggle == "on") return db.set(`AntiSwear_${message.guild.id}`, "off") && message.reply({ content: "> ✅ **Anti-Swear Portiction Is Disabled**", ephemeral: true });
            else if (toggle == "off") return db.set(`AntiSwear_${message.guild.id}`, "on") && message.reply({ content: "> ✅ **Anti-Swear Portiction Is Active**", ephemeral: true });
        } else message.reply({ content: '> :x: **please restat the bot to regenerat bot settings**', ephemeral: true });
    }
};