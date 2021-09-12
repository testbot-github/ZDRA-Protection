const { Client, CommandInteraction } = require("discord.js");
const db = require('quick.db');

module.exports = {
    name: "slow-mode",
    description: "Set Slow Mode For Text Channels",
    type: 'CHAT_INPUT',
    options: [{
            name: "value",
            description: "Slow Mode Number!.",
            type: "NUMBER",
            required: true
        },
        {
            name: "channel",
            description: "The Channel You Wont To Change The Slow Mode Number!.",
            type: "CHANNEL",
            required: false
        }
    ],

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async(client, interaction, args) => {
        let settings = db.fetch(`Settings_${interaction.guild.id}`);
        let lang = settings.lang;
        let channel = interaction.guild.channels.get(interaction.options.getChannel('channel')) || interaction.channel;
        let value = interaction.options.getNumber('value');
        if (lang == 'ar') {
            channel.setRateLimitPerUser(Number(value));
            interaction.reply({ content: `> :white_check_mark: **تم تعديل وضع التبطيئ في هذه قناة <#${channel.id}> الي \`${value}\`**`, ephemeral: true });
        } else if (lang == 'en') {
            channel.setRateLimitPerUser(Number(value));
            interaction.reply({ content: `> :white_check_mark: **<#${channel.id}> Slow Mode Has Set To \`${value}\`**`, ephemeral: true });
        }
    },
};