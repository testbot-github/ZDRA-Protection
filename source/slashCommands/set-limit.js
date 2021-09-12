const { Client, CommandInteraction } = require("discord.js");
const db = require('quick.db');

module.exports = {
    name: "set-limit",
    description: "Set The Protection Limits",
    type: 'CHAT_INPUT',
    options: [{
        name: "input",
        description: "The Setting You Wont To Change!.",
        type: "STRING",
        required: true
    }, {
        name: "value",
        description: "The Value You Wont To Change In The Setiing You Chosed!.",
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
        if (lang == "ar") {
            if (interaction.options.getString('input') == "RoleCreate") {
                db.set(`RoleCreate_${interaction.guild.id}`, interaction.options.getString('value') || 3)
                interaction.reply({ content: `> :white_check_mark: **تم وضع حد صنع الرتب الي \`${interaction.options.getString('value') || 3}\`**`, ephemeral: true })
            } else if (interaction.options.getString('input') == "RoleDelete") {
                db.set(`RoleDelete_${interaction.guild.id}`, interaction.options.getString('value') || 3)
                interaction.reply({ content: `> :white_check_mark: **تم وضع حد حزف الرتب الي \`${interaction.options.getString('value') || 3}\`**`, ephemeral: true })
            } else if (interaction.options.getString('input') == "ChannelCreate") {
                db.set(`ChannelCreate_${interaction.guild.id}`, interaction.options.getString('value') || 3)
                interaction.reply({ content: `> :white_check_mark: **تم وضع حد صنع الرومات الي \`${interaction.options.getString('value') || 3}\`**`, ephemeral: true })
            } else if (interaction.options.getString('input') == "ChannelDelete") {
                db.set(`ChannelDelete_${interaction.guild.id}`, interaction.options.getString('value') || 3)
                interaction.reply({ content: `> :white_check_mark: **تم وضع حد حزف الرومات الي \`${interaction.options.getString('value') || 3}\`**`, ephemeral: true })
            } else if (interaction.options.getString('input') == "MembersBan") {
                db.set(`MemebersBan_${interaction.guild.id}`, interaction.options.getString('value') || 3)
                interaction.reply({ content: `> :white_check_mark: **تم وضع حد اعطاء باند الي \`${interaction.options.getString('value') || 3}\`**`, ephemeral: true })
            } else interaction.reply({ content: `> :x: **يوفر البوت الخيارات الأتيه: ['RoleCreate','RoleDelete','ChannelCreate','ChannelDelete','MembersBan']**`, ephemeral: true })
        } else if (lang == "en") {
            if (interaction.options.getString('input') == "RoleCreate") {
                db.set(`RoleCreate_${interaction.guild.id}`, interaction.options.getString('value') || 3)
                interaction.reply({ content: `> :white_check_mark: **Done.. Set The Role Create Limit \`${interaction.options.getString('value') || 3}\`**`, ephemeral: true })
            } else if (interaction.options.getString('input') == "RoleDelete") {
                db.set(`RoleDelete_${interaction.guild.id}`, interaction.options.getString('value') || 3)
                interaction.reply({ content: `> :white_check_mark: **Done.. Set The Role Delete Limit \`${interaction.options.getString('value') || 3}\`**`, ephemeral: true })
            } else if (interaction.options.getString('input') == "ChannelCreate") {
                db.set(`ChannelCreate_${interaction.guild.id}`, interaction.options.getString('value') || 3)
                interaction.reply({ content: `> :white_check_mark: **Done.. Set The Channel Create Limit \`${interaction.options.getString('value') || 3}\`**`, ephemeral: true })
            } else if (interaction.options.getString('input') == "ChannelDelete") {
                db.set(`ChannelDelete_${interaction.guild.id}`, interaction.options.getString('value') || 3)
                interaction.reply({ content: `> :white_check_mark: **Done.. Set The Channel Delete Limit \`${interaction.options.getString('value') || 3}\`**`, ephemeral: true })
            } else if (interaction.options.getString('input') == "MembersBan") {
                db.set(`MemebersBan_${interaction.guild.id}`, interaction.options.getString('value') || 3)
                interaction.reply({ content: `> :white_check_mark: **Done.. Set The Memeber Ban Limit \`${interaction.options.getString('value') || 3}\`**`, ephemeral: true })
            } else interaction.reply(`> :x: **Please Select One Of This : ['RoleCreate','RoleDelete','ChannelCreate','ChannelDelete','MembersBan']**`)
        } else interaction.reply(`-_-`)
    },
};