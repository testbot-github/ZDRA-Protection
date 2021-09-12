const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const db = require('quick.db');

module.exports = {
    name: "avatar",
    description: "User Avatar!.",
    type: 'CHAT_INPUT',
    options: [{
        name: "user",
        description: "The User ._.",
        type: "USER",
        required: false
    }],

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async(client, interaction, args) => {
        let user = interaction.options.getUser('user') || interaction.user;
        let embed = new MessageEmbed()
            .setAuthor(user.username, user.avatarURL({ dynamic: true }))
            .setDescription(`**[Avatar Link](${user.avatarURL({ dynamic: true })})**`)
            .setImage(user.avatarURL({ dynamic: true }))
            .setColor("GREEN")
            .setFooter(user.username, user.avatarURL({ dynamic: true }))
        interaction.reply({
            embeds: [embed],
            ephemeral: true
        });
    },
};