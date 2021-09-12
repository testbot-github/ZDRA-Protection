const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const db = require('quick.db');

module.exports = {
    name: "anti-links",
    description: "Toggle The Anti Links",
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
            let toggle = db.fetch(`AntiLinks_${interaction.guild.id}`);
            if (toggle == null) return db.set(`AntiLinks_${interaction.guild.id}`, "on") && interaction.reply({ content: "> ✅ **حماية اللينكات مفعله**", ephemeral: true });
            else if (toggle == "on") return db.set(`AntiLinks_${interaction.guild.id}`, "off") && interaction.reply({ content: "> ✅ **حماية اللينكات معطله**", ephemeral: true });
            else if (toggle == "off") return db.set(`AntiLinks_${interaction.guild.id}`, "on") && interaction.reply({ content: "> ✅ **حماية اللينكات مفعله**", ephemeral: true });
        } else if (lang == "en") {
            let toggle = db.fetch(`AntiLinks_${interaction.guild.id}`);
            if (toggle == null) return db.set(`AntiLinks_${interaction.guild.id}`, "on") && interaction.reply({ content: "> ✅ **ِAnti-Links Portiction Is Active**", ephemeral: true });
            else if (toggle == "on") return db.set(`AntiLinks_${interaction.guild.id}`, "off") && interaction.reply({ content: "> ✅ **Anti-Links Portiction Is Disabled**", ephemeral: true });
            else if (toggle == "off") return db.set(`AntiLinks_${interaction.guild.id}`, "on") && interaction.reply({ content: "> ✅ **Anti-Links Portiction Is Active**", ephemeral: true });
        }
    },
};