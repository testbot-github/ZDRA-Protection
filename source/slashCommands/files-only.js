const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const db = require('quick.db');

module.exports = {
    name: "files-only",
    description: "Make The Channel For Send Files Only",
    type: 'CHAT_INPUT',
    options: [{
        name: 'channel',
        description: 'the channel you won\'t to make it for files only',
        type: 'CHANNEL',
        required: false
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
        let channel = interaction.guild.channels.cache.get(interaction.options.getChannel('channel')) || interaction.channel;
        if (lang == "ar") {
            db.set(`FilesOnly_${interaction.guild.id}`, channel);
            interaction.reply({ content: `> :white_check_mark: **تم أتخاذ قناة <#${channel.id}> لتكون للمفات فقط!.**` });
        } else if (lang == "en") {
            db.set(`FilesOnly_${interaction.guild.id}`, channel); // براعية احمد حناكه!!.
            interaction.reply({ content: `> :white_check_mark: **<#${channel.id}> has been set to be files only!.**` });
        }
    },
};