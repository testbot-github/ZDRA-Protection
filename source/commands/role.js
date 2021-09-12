const { Client, Message, Guild } = require("discord.js");


module.exports = {
    name: "role",
    aliases: [""],

    /**
     * 
     * @param {Client} client
     * @param {Message} message
     * @param {Guild} guild
     */

    run: async(client, message, args, prefix, lang, admins, db, MessageEmbed) => {
        let member = message.mentions.members.first() || client.users.cache.get(args[1]);
        let role = message.mentions.roles.first() || client.roles.cache.get(args[2]);
        let time = args[3];
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
            message.reply({ content: msg, ephemeral: true });
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
            message.reply({ content: msg, ephemeral: true });
        }
    }
};