const { Client, Message, Guild } = require("discord.js");


module.exports = {
    name: "anti-links",
    aliases: [""],

    /**
     * 
     * @param {Client} client
     * @param {Message} message
     * @param {Guild} guild
     */

    run: async(client, message, args, prefix, lang, admins, db, MessageEmbed) => {
        if (lang == "ar") {
            let toggle = db.fetch(`AntiLinks_${message.guild.id}`);
            if (toggle == null) return db.set(`AntiLinks_${message.guild.id}`, "on") && message.reply({ content: "> ✅ **حماية اللينكات مفعله**", ephemeral: true });
            else if (toggle == "on") return db.set(`AntiLinks_${message.guild.id}`, "off") && message.reply({ content: "> ✅ **حماية اللينكات معطله**", ephemeral: true });
            else if (toggle == "off") return db.set(`AntiLinks_${message.guild.id}`, "on") && message.reply({ content: "> ✅ **حماية اللينكات مفعله**", ephemeral: true });
        } else if (lang == "en") {
            let toggle = db.fetch(`AntiLinks_${message.guild.id}`);
            if (toggle == null) return db.set(`AntiLinks_${message.guild.id}`, "on") && message.reply({ content: "> ✅ **ِAnti-Links Portiction Is Active**", ephemeral: true });
            else if (toggle == "on") return db.set(`AntiLinks_${message.guild.id}`, "off") && message.reply({ content: "> ✅ **Anti-Links Portiction Is Disabled**", ephemeral: true });
            else if (toggle == "off") return db.set(`AntiLinks_${message.guild.id}`, "on") && message.reply({ content: "> ✅ **Anti-Links Portiction Is Active**", ephemeral: true });
        }
    }
};