const { Client, CommandInteraction } = require("discord.js");
const db = require('quick.db');

module.exports = {
    name: "show",
    description: "Show The Channel!.",
    type: 'CHAT_INPUT',
    options: [{
        name: "channel",
        description: "The Channel You Wont To Show!.",
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
            channel.permissionOverwrites.create(channel.guild.roles.everyone, { VIEW_CHANNEL: true });
            interaction.reply({ content: `> ✅ **This Channel Is Showen**`, ephemeral: true })
        } else if (lang == "ar") {
            channel.permissionOverwrites.create(channel.guild.roles.everyone, { VIEW_CHANNEL: true });
            interaction.reply({ content: `> ✅ **هاذه القناه ظاهره**`, ephemeral: true })
        }
    },
};