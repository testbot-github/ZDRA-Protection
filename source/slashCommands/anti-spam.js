const { Client, CommandInteraction } = require("discord.js");
const db = require('quick.db');

module.exports = {
    name: "anti-spam",
    description: "Anti-Spam Proticion Toggle!.",
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
            let toggle = db.fetch(`AntiSpam_${interaction.guild.id}`);
            if (toggle == null) return db.set(`AntiSpam_${interaction.guild.id}`, "on") && interaction.reply({
                content: "> ✅ **حماية السبام مفعله**",
                ephemeral: true
            });
            else if (toggle == "on") return db.set(`AntiSpam_${interaction.guild.id}`, "off") && interaction.reply({
                content: "> ✅ **حماية السبام معطله**",
                ephemeral: true
            });
            else if (toggle == "off") return db.set(`AntiSpam_${interaction.guild.id}`, "on") && interaction.reply({
                content: "> ✅ **حماية السبام مفعله**",
                ephemeral: true
            });
        } else if (lang == "en") {
            let toggle = db.fetch(`AntiSpam_${interaction.guild.id}`);
            if (toggle == null) return db.set(`AntiSpam_${interaction.guild.id}`, "on") && interaction.reply({
                content: "> ✅ **Anti-Spam Portiction Is Active**",
                ephemeral: true
            });
            else if (toggle == "on") return db.set(`AntiSpam_${interaction.guild.id}`, "off") && interaction.reply({
                content: "> ✅ **Anti-Spam Portiction Is Disabled**",
                ephemeral: true
            });
            else if (toggle == "off") return db.set(`AntiSpam_${interaction.guild.id}`, "on") && interaction.reply({
                content: "> ✅ **Anti-Spam Portiction Is Active**",
                ephemeral: true
            });
        } else interaction.reply({
            content: '> :x: **please restat the bot to regenerat bot settings**',
            ephemeral: true
        });
    },
};