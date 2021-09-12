const { Client, CommandInteraction } = require("discord.js");
const db = require('quick.db');

module.exports = {
    name: "clear",
    description: "Clear Messages!.",
    type: 'CHAT_INPUT',
    options: [{
        name: "channel",
        description: "The Channel You Wont To Clear Messages In!.",
        type: "CHANNEL",
        required: false
    }, {
        name: "messages",
        description: "How Much The Message You Wont to delete!.",
        type: "STRING",
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
        let messagecount = parseInt(interaction.options.getString('messages')) || '100';
        let channel = interaction.options.getChannel('channel') || interaction.channel;
        if (lang == "ar") {
            if (messagecount > 100) return interaction.reply({ content: `> :x: **لا يمكن حزف اكثر من 100 رساله**`, ephemeral: true });
            channel.messages.fetch({ limit: 100 }).then(() => channel.bulkDelete(messagecount)).then(msgs => {
                interaction.reply({ content: `> :wastebasket: **تم حزف \`${msgs.size}\` رساله**`, ephemeral: true })
            });
        } else if (lang == "en") {
            if (messagecount > 100) return interaction.reply({ content: `> :x: **I Can't Delete More Than 100 Message**`, ephemeral: true });
            channel.messages.fetch({ limit: 100 }).then(() => channel.bulkDelete(messagecount)).then(msgs => {
                interaction.reply({ content: `> :wastebasket: **\`${msgs.size}\` Messages Has removed in <#${channel.id}>**`, ephemeral: true })
            });
        }
    },
};