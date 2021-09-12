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
        let time = args[2] || "24h";
        let reason = args[3] || "no reason";
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
            if (time.endsWith('0') || time.endsWith('1') || time.endsWith('2') || time.endsWith('3') || time.endsWith('4') || time.endsWith('5') || time.endsWith('6') || time.endsWith('7') || time.endsWith('8') || time.endsWith('9')) return message.reply({ content: '> :x: **أدخال الوقت خاطأ**', ephemeral: true });
            if (member.roles.cache.find(role => role.id == muterole.id)) return message.reply({ content: `> :x: **تم اسكات هذا الشخص مسبقا**`, ephemeral: true });
            member.roles.add(muterole).then(() => {
                message.reply({ content: `> ✅ **تم اسكات <@!${member.user.id}> لمدة \`${time}\` بسبب \`${reason}\`**`, ephemeral: true });
                setTimeout(() => {
                    member.roles.remove(muterole);
                }, ms(time));
            });
        } else if (lang == "en") {
            if (time.endsWith('0') || time.endsWith('1') || time.endsWith('2') || time.endsWith('3') || time.endsWith('4') || time.endsWith('5') || time.endsWith('6') || time.endsWith('7') || time.endsWith('8') || time.endsWith('9')) return message.reply({ content: '> :x: **Worang Time Input**', ephemeral: true });
            if (member.roles.cache.find(role => role.id == muterole.id)) return message.reply({ content: `> :x: **This One Is Already Muted**`, ephemeral: true });
            member.roles.add(muterole).then(() => {
                message.reply({ content: `> ✅ **<@!${member.user.id}> Has Muted For \`${time}\` Becouse \`${reason}\`**`, ephemeral: true });
                setTimeout(() => {
                    member.roles.remove(muterole);
                }, ms(time));
            });
        }
    }
};