const { Client, CommandInteraction } = require("discord.js");
const db = require('quick.db');
const ms = require('ms');

module.exports = {
    name: "role",
    description: "Give Roles!.",
    type: 'CHAT_INPUT',
    options: [{
        name: "user",
        description: "The User You Wont To Give Him The Role!.",
        type: "USER",
        required: true
    }, {
        name: "role",
        description: "The Role You Will Give!.",
        type: "ROLE",
        required: true
    }, {
        name: "time",
        description: "How Much He Will He Have The Role!.",
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
        let role = interaction.guild.roles.cache.get(interaction.options.getRole('role').id);
        let time = interaction.options.getString('time');
        if (lang == "ar") {
            var msg;
            member.roles.add(role)
            msg = `> ✅ **تم اعطاء <@&${role.id}> الي <@!${member.user.id}>**`;
            if (time) {
                msg = `> ✅ **تم اعطاء <@&${role.id}> الي <@!${member.user.id}> لمدة \`${time}\`**`;
                setTimeout(() => {
                    member.roles.remove(role)
                }, ms(time));
            }
            interaction.reply({ content: msg, ephemeral: true });
        } else if (lang == "en") {
            var msg;
            member.roles.add(role)
            msg = `> ✅ **<@&${role.id}> role has add to <@!${member.user.id}>**`;
            if (time) {
                msg = `> ✅ **<@&${role.id}> role has add to <@!${member.user.id}> for \`${time}\`**`;
                setTimeout(() => {
                    member.roles.remove(role)
                }, ms(time));
            }
            interaction.reply({ content: msg, ephemeral: true });
        }
    },
};