const { Client, Message, Guild } = require("discord.js");


module.exports = {
    name: "mute",
    aliases: [""],

    /**
     * 
     * @param {Client} client
     * @param {Message} message
     * @param {Guild} guild
     */

    run: async(client, message, args, prefix, lang, admins, db, MessageEmbed) => {
        let member = message.mentions.members.first() || client.users.cache.get(args[1]);
        let muterole = message.guild.roles.cache.find(role => role.name === 'Muted');
        if (!muterole) {
            try {
                message.guild.roles.create({
                    data: {
                        name: "Muted",
                    }
                }).then(async(role) => {
                    message.guild.channels.cache.forEach(channel => {
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
            if (!member.roles.cache.find(role => role.id == muterole.id)) return message.reply({ content: `> :x: **لم يتم اسكات هذا الشخص من الأساس**`, ephemeral: true });
            member.roles.remove(muterole).then(() => {
                message.reply({ content: `> ✅ **تم فك اسكات <@!${member.user.id}>**`, ephemeral: true });
            });
        } else if (lang == "en") {
            if (!member.roles.cache.find(role => role.id == muterole.id)) return message.reply({ content: `> :x: **This One Has Never Muted**`, ephemeral: true });
            member.roles.remove(muterole).then(() => {
                message.reply({ content: `> ✅ **<@!${member.user.id}> Has Unmuted**`, ephemeral: true });
            });
        }
    }
};