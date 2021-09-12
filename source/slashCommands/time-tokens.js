const { Client, CommandInteraction } = require("discord.js");
const db = require('quick.db');

module.exports = {
    name: "time-token",
    description: "Set The Least Days That Allowed To Join To The Server",
    type: 'CHAT_INPUT',
    options: [{
        name: "input",
        description: "The Accounts Age With Days!.",
        type: "STRING",
        required: true
    }],

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
            db.set(`AntiTokensTime_${interaction.guild.id}`, Number(interaction.options.getString('input')));
            interaction.reply({ content: `> ✅ **عمر الحسابات المسموح بدخولها هي \`${interaction.options.getString('input')}\`**`, ephemeral: true });
        } else if (lang == "en") {
            db.set(`AntiTokensTime_${interaction.guild.id}`, Number(interaction.options.getString('input')));
            interaction.reply({ content: `> ✅ **The Tima Of Accounts That Allowed To Join Is \`${interaction.options.getString('input')}\`**`, ephemeral: true });
        } else interaction.reply({ content: '> :x: **please restat the bot to regenerat bot settings**', ephemeral: true });
    },
};