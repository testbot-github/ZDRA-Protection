const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const db = require('quick.db');

module.exports = {
    name: "devs",
    description: "Bot Devs",
    type: 'CHAT_INPUT',

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async(client, interaction, args) => {
        let embed = new MessageEmbed()
            .setAuthor('ZRDA Protectin!.', client.user.avatarURL({ dynamic: true }), 'https://discord.gg/developer-support')
            .setColor('DARK_GOLD')
            .addFields({
                name: "Developers name",
                value: "ニロ, ᴹᵃᴿˢ#3121, 【H2】Cyber#1111",
                inline: true
            }, {
                name: "bot github page",
                value: '[Here](https://github.com/DevelopersSupportAR/ZDRA-Protection.git)',
                inline: true
            }, {
                name: "bot support server",
                value: "[Here](https://discord.gg/developer-support)",
                inline: true
            })
            .setImage("https://cdn.discordapp.com/attachments/759537850919944233/885901299395207219/Screenshot_2021-09-10-16-53-58-19_3a637037d35f95c5dbcdcc75e697ce91.png");
        interaction.reply({ embeds: [embed], allowedMentions: false, ephemeral: false })
    },
};