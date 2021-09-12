const { Client, CommandInteraction } = require("discord.js");
const db = require('quick.db');

module.exports = {
    name: "ban",
    description: "Ban Members!.",
    type: 'CHAT_INPUT',
    options: [{
        name: "user",
        description: "The User You Wont To Ban!.",
        type: "USER",
        required: true
    }, {
        name: "reason",
        description: "The Reason Why You Ban Him!.",
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
        let member = interaction.guild.members.cache.get(interaction.options.getUser('user').id);
        if (!member) return;
        if (lang == "en") {
            if (member.bannable) {
                member.ban({ reason: interaction.options.getString('reason') || "no reason" });
                interaction.reply({ content: `> ✈️ **<@!${member.id}> Has Gote Banned Becouse: ${interaction.options.getString('reason') || "no reason"}**`, ephemeral: true })
            } else interaction.reply({ content: `> :x: **I Can't Ban <@!${member.id}>**`, ephemeral: true })
        } else if (lang == "ar") {
            if (member.bannable) {
                member.ban({ reason: interaction.options.getString('reason') || "no reason" });
                interaction.reply({ content: `> ✈️ **<@!${member.id}> حظر من السيرفر بسبب: ${interaction.options.getString('reason') || "no reason"}**`, ephemeral: true })
            } else interaction.reply({ content: `> :x: **لا يمكني حظر <@!${member.id}>**`, ephemeral: true })
        }
    },
};