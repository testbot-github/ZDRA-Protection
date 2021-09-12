const { Client, CommandInteraction } = require("discord.js");
const db = require('quick.db');

module.exports = {
    name: "anti-token",
    description: "Anti-FackAccounts Proticion Toggle!.",
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
            let toggle = db.fetch(`AntiTokens_${interaction.guild.id}`);
            if (toggle == null) return db.set(`AntiTokens_${interaction.guild.id}`, "on") && interaction.reply({
                content: "> ✅ **حماية الحسابات الوهميه مفعله**",
                ephemeral: true
            });
            else if (toggle == "on") return db.set(`AntiTokens_${interaction.guild.id}`, "off") && interaction.reply({
                content: "> ✅ **حماية الحسابات الوهميه معطله**",
                ephemeral: true
            });
            else if (toggle == "off") return db.set(`AntiTokens_${interaction.guild.id}`, "on") && interaction.reply({
                content: "> ✅ **حماية الحسابات الوهميه مفعله**",
                ephemeral: true
            });
        } else if (lang == "en") {
            let toggle = db.fetch(`AntiTokens_${interaction.guild.id}`);
            if (toggle == null) return db.set(`AntiTokens_${interaction.guild.id}`, "on") && interaction.reply({
                content: "> ✅ **Anti-Tokens Portiction Is Active**",
                ephemeral: true
            });
            else if (toggle == "on") return db.set(`AntiTokens_${interaction.guild.id}`, "off") && interaction.reply({
                content: "> ✅ **Anti-Tokens Portiction Is Disabled**",
                ephemeral: true
            });
            else if (toggle == "off") return db.set(`AntiTokens_${interaction.guild.id}`, "on") && interaction.reply({
                content: "> ✅ **Anti-Tokens Portiction Is Active**",
                ephemeral: true
            });
        } else interaction.reply({
            content: '> :x: **please restat the bot to regenerat bot settings**',
            ephemeral: true
        });
    },
};