const { Client, Message, Guild } = require("discord.js");


module.exports = {
    name: "anti-bots",
    aliases: ["anti-bot"],

    /**
     * 
     * @param {Client} client
     * @param {Message} message
     * @param {Guild} guild
     */

    run: async(client, message, args, prefix, lang, admins, db, MessageEmbed) => {
        if (lang == "ar") {
            let toggle = db.fetch(`AntiBots_${message.guild.id}`);
            if (toggle == null) return db.set(`AntiBots_${message.guild.id}`, "on") && message.reply({ content: "> ✅ **حماية اللبوتات مفعله**", ephemeral: true });
            else if (toggle == "on") return db.set(`AntiBots_${message.guild.id}`, "off") && message.reply({ content: "> ✅ **حماية اللبوتات معطله**", ephemeral: true });
            else if (toggle == "off") return db.set(`AntiBots_${message.guild.id}`, "on") && message.reply({ content: "> ✅ **حماية اللبوتات مفعله**", ephemeral: true });
        } else if (lang == "en") {
            let toggle = db.fetch(`AntiBots_${message.guild.id}`);
            if (toggle == null) return db.set(`AntiBots_${message.guild.id}`, "on") && message.reply({ content: "> ✅ **Anti-Bots Portiction Is Active**", ephemeral: true });
            else if (toggle == "on") return db.set(`AntiBots_${message.guild.id}`, "off") && message.reply({ content: "> ✅ **Anti-Bots Portiction Is Disabled**", ephemeral: true });
            else if (toggle == "off") return db.set(`AntiBots_${message.guild.id}`, "on") && message.reply({ content: "> ✅ **Anti-Bots Portiction Is Active**", ephemeral: true });
        }
    }
};