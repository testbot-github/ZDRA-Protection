const { Client, CommandInteraction } = require("discord.js");
const db = require('quick.db');

module.exports = {
    name: "anti-bots",
    description: "Anti-Bots Protiction Toggle!.",
    type: 'CHAT_INPUT',

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async(client, interaction, args) => {
        let settings = db.fetch(`Settings_${interaction.guild.id}`);
        let lang = settings.lang;
        if (lang == "ar") {
            let toggle = db.fetch(`AntiBots_${interaction.guild.id}`);
            if (toggle == null) return db.set(`AntiBots_${interaction.guild.id}`, "on") && interaction.reply({
                content: "> ✅ **حماية اللبوتات مفعله**",
                ephemeral: true
            });
            if (toggle == "on") return db.set(`AntiBots_${interaction.guild.id}`, "off") && interaction.reply({
                content: "> ✅ **حماية اللبوتات معطله**",
                ephemeral: true
            });
            if (toggle == "off") return db.set(`AntiBots_${interaction.guild.id}`, "on") && interaction.reply({
                content: "> ✅ **حماية اللبوتات مفعله**",
                ephemeral: true
            });
        } else if (lang == "en") {
            let toggle = db.fetch(`AntiBots_${interaction.guild.id}`);
            if (toggle == null) return db.set(`AntiBots_${interaction.guild.id}`, "on") && interaction.reply({
                content: "> ✅ **Anti-Bots Portiction Is Active**",
                ephemeral: true
            });
            if (toggle == "on") return db.set(`AntiBots_${interaction.guild.id}`, "off") && interaction.reply({
                content: "> ✅ **Anti-Bots Portiction Is Disabled**",
                ephemeral: true
            });
            if (toggle == "off") return db.set(`AntiBots_${interaction.guild.id}`, "on") && interaction.reply({
                content: "> ✅ **Anti-Bots Portiction Is Active**",
                ephemeral: true
            });
        }
    },
};