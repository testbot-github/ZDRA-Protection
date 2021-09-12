const { Client, Message, Guild } = require("discord.js");


module.exports = {
    name: "set-limit",
    aliases: [""],

    /**
     * 
     * @param {Client} client
     * @param {Message} message
     * @param {Guild} guild
     */

    run: async(client, message, args, prefix, lang, admins, db, MessageEmbed) => {
        if (lang == "ar") {
            if (args[1] == "RoleCreate") {
                db.set(`RoleCreate_${message.guild.id}`, args[2] || 3)
                message.reply({ content: `> :white_check_mark: **تم وضع حد صنع الرتب الي \`${args[2] || 3}\`**`, ephemeral: true })
            } else if (args[1] == "RoleDelete") {
                db.set(`RoleDelete_${message.guild.id}`, args[2] || 3)
                message.reply({ content: `> :white_check_mark: **تم وضع حد حزف الرتب الي \`${args[2] || 3}\`**`, ephemeral: true })
            } else if (args[1] == "ChannelCreate") {
                db.set(`ChannelCreate_${message.guild.id}`, args[2] || 3)
                message.reply({ content: `> :white_check_mark: **تم وضع حد صنع الرومات الي \`${args[2] || 3}\`**`, ephemeral: true })
            } else if (args[1] == "ChannelDelete") {
                db.set(`ChannelDelete_${message.guild.id}`, args[2] || 3)
                message.reply({ content: `> :white_check_mark: **تم وضع حد حزف الرومات الي \`${args[2] || 3}\`**`, ephemeral: true })
            } else if (args[1] == "MembersBan") {
                db.set(`MemebersBan_${message.guild.id}`, args[2] || 3)
                message.reply({ content: `> :white_check_mark: **تم وضع حد اعطاء باند الي \`${args[2] || 3}\`**`, ephemeral: true })
            } else message.reply({ content: `> :white_check_mark: **يوفر البوت الخيارات الأتيه: ['RoleCreate','RoleDelete','ChannelCreate','ChannelDelete','MembersBan']**`, ephemeral: true })
        } else if (lang == "en") {
            if (args[1] == "RoleCreate") {
                db.set(`RoleCreate_${message.guild.id}`, args[2] || 3)
                message.reply({ content: `> :white_check_mark: **Done.. Set The Role Create Limit \`${args[2] || 3}\`**` })
            } else if (args[1] == "RoleDelete") {
                db.set(`RoleDelete_${message.guild.id}`, args[2] || 3)
                message.reply({ content: `> :white_check_mark: **Done.. Set The Role Delete Limit \`${args[2] || 3}\`**` })
            } else if (args[1] == "ChannelCreate") {
                db.set(`ChannelCreate_${message.guild.id}`, args[2] || 3)
                message.reply({ content: `> :white_check_mark: **Done.. Set The Channel Create Limit \`${args[2] || 3}\`**` })
            } else if (args[1] == "ChannelDelete") {
                db.set(`ChannelDelete_${message.guild.id}`, args[2] || 3)
                message.reply({ content: `> :white_check_mark: **Done.. Set The Channel Delete Limit \`${args[2] || 3}\`**` })
            } else if (args[1] == "MembersBan") {
                db.set(`MemebersBan_${message.guild.id}`, args[2] || 3)
                message.reply({ content: `> :white_check_mark: **Done.. Set The Memeber Ban Limit \`${args[2] || 3}\`**` })
            } else message.reply(`> :white_check_mark: **Please Select One Of This : ['RoleCreate','RoleDelete','ChannelCreate','ChannelDelete','MembersBan']**`)
        } else message.reply(`-_-`)
    }
};