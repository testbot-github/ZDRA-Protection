const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const db = require('quick.db');

module.exports = {
    name: "logs",
    description: "Server Log!.",
    type: 'CHAT_INPUT',
    options: [{
        name: "channel",
        description: "The Log Channel",
        type: "CHANNEL",
        required: true
    }],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async(client, interaction, args) => {
        db.set(`Logs_${interaction.guild.id}`, interaction.options.getChannel('channel').id);
        interaction.reply({ content: `> :eyes: **Server Logs Is Here: <#${interaction.options.getChannel('channel').id}>**`, ephemeral: true });
    },
};