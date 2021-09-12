const { Client, CommandInteraction } = require("discord.js");
const db = require('quick.db');

module.exports = {
    name: "add-swear",
    description: "Add A Blocked Swear To Blocked Swears List!.",
    type: 'CHAT_INPUT',
    options: [{
        name: "input",
        description: "The Swear",
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
            let input = interaction.options.getString('input');
            let checker = db.get(`AntiSwearArray_${interaction.guild.id}.data`);
            if (checker == null) return db.set(`AntiSwearArray_${interaction.guild.id}`, { data: [`${input}`] }) && interaction.reply({
                content: `> ✅ **تم أضافى السبه \`${input}\`**`,
                ephemeral: true
            });
            if (checker.includes(input)) return interaction.reply({
                content: '> :x: **هذه السبه موجوده مسبقا**',
                ephemeral: true
            });
            db.push(`AntiSwearArray_${interaction.guild.id}.data`, input);
            interaction.reply({
                content: `> ✅ **تم أضافى السبه \`${input}\`**`,
                ephemeral: true
            });
        } else if (lang == "en") {
            let input = interaction.options.getString('input');
            let checker = db.get(`AntiSwearArray_${interaction.guild.id}.data`);
            if (checker == null) return db.set(`AntiSwearArray_${interaction.guild.id}`, { data: [`${input}`] } && interaction.reply({
                content: `> ✅ **Done The \`${input}\` Is Now Blocked**`,
                ephemeral: true
            }));
            if (checker.includes(input)) return interaction.reply({
                content: '> :x: **This Swear Is Alread Added**',
                ephemeral: true
            });
            db.push(`AntiSwearArray_${interaction.guild.id}.data`, input);
            interaction.reply({
                content: `> ✅ **Done The \`${input}\` Is Now Blocked**`,
                ephemeral: true
            });
        }
    },
};