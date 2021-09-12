const { Client, CommandInteraction } = require("discord.js");
const db = require('quick.db');

module.exports = {
    name: "unmute",
    description: "Text Unmute Members!.",
    type: 'CHAT_INPUT',
    options: [{
        name: "user",
        description: "The User You Wont To Unmute!.",
        type: "USER",
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
        let member = interaction.guild.members.cache.get(interaction.options.getUser('user').id);
        let muterole = interaction.guild.roles.cache.find(role => role.name === 'Muted');
        if (!muterole) {
            try {
                interaction.guild.roles.create({
                    data: {
                        name: "Muted",
                    }
                }).then(async(role) => {
                    interaction.guild.channels.cache.forEach(channel => {
                        channel.overwritePermissions([{
                            id: role.id,
                            deny: ["SEND_MESSAGES"]
                        }]);
                    })
                })
            } catch (err) {
                console.log(err)
            }
        }
        if (lang == "ar") {
            if (!member.roles.cache.find(role => role.id == muterole.id)) return interaction.reply({ content: `> :x: **لم يتم اسكات هذا الشخص من الأساس**`, ephemeral: true });
            member.roles.remove(muterole).then(() => {
                interaction.reply({ content: `> ✅ **تم فك اسكات <@!${member.user.id}>**`, ephemeral: true });
            });
        } else if (lang == "en") {
            if (!member.roles.cache.find(role => role.id == muterole.id)) return interaction.reply({ content: `> :x: **This One Has Never Muted**`, ephemeral: true });
            member.roles.remove(muterole).then(() => {
                interaction.reply({ content: `> ✅ **<@!${member.user.id}> Has Unmuted**`, ephemeral: true });
            });
        }
    },
};