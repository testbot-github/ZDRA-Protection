const { Client, CommandInteraction } = require("discord.js");
const db = require('quick.db');

module.exports = {
    name: "unlock",
    description: "Unlock The Channel!.",
    type: 'CHAT_INPUT',
    options: [{
        name: "channel",
        description: "The Channel You Wont To Unlock!.",
        type: "CHANNEL",
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

        let channel = interaction.channel;
        if (interaction.options.getChannel('channel')) channel = interaction.guild.channels.cache.get(interaction.options.getChannel('channel').id)
        if (lang == "en") {
            channel.permissionOverwrites.create(channel.guild.roles.everyone, { SEND_MESSAGES: true });
            interaction.reply({ content: `> ✅ **This Channel Is Unlocked**`, ephemeral: true })
        } else if (lang == "ar") {
            channel.permissionOverwrites.create(channel.guild.roles.everyone, { SEND_MESSAGES: true });
            interaction.reply({ content: `> ✅ **هاذه القناه مفتوحه**`, ephemeral: true })
        }
    },
};