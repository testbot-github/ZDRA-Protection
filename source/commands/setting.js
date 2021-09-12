const { Client, Message, Guild } = require("discord.js");


module.exports = {
    name: "setting",
    aliases: ["settings"],

    /**
     * 
     * @param {Client} client
     * @param {Message} message
     * @param {Guild} guild
     */

    run: async(client, message, args, prefix, lang, admins, servers, db, MessageEmbed) => {
        if (message.author.bot || message.channel.type == "dm") return;
        if (lang == "ar") {
            if (args[1] == "prefix") {
                if (!args[2]) return message.reply({ content: '> :x: **عليك كتابت البادءه الجديده**', ephemeral: true })
                db.set(`Settings_${message.guild.id}`, {
                    prefix: args[2],
                    lang: lang,
                    admins: admins
                });
                message.reply({ content: `> :white_check_mark: **تم تغير بادءة البوت  لـ\`${args[2]}\`**`, ephemeral: true })
            } else if (args[1] == "lang") {
                if (!args[2]) return message.reply({ content: '> :x: **عليك كتابت الغه الجديده**', ephemeral: true });
                if (!args[2] == "ar") return message.reply({ content: '> :x: **الغات المتوفه: [\'en\', \'ar\']**', ephemeral: true });
                else if (!args[2] == "en") return message.reply({ content: '> :x: **الغات المتوفه: [\'en\', \'ar\']**', ephemeral: true });
                else {
                    db.set(`Settings_${message.guild.id}`, {
                        prefix: prefix,
                        lang: args[2],
                        admins: admins
                    });
                    message.reply({ content: `> :white_check_mark: **تم تغير الغه  لـ\`${args[2]}\`**`, ephemeral: true })
                }
            } else if (args[1] == "admins") {
                if (!args[2]) return message.reply({ content: '> :x: **عليك كتابت اي دي الأدمن الجديد الجديده**', ephemeral: true });
                if (isNaN(args[2])) return message.reply({ content: '> :x: **يجب ان يكون اي دي الأدمن متكون من ارقام**', ephemeral: true });
                if (admins.includes(args[2])) return message.reply({ content: '> :x: **هذا الشخص موجود مسبقا**', ephemeral: true });
                else {
                    db.push(`Settings_${message.guild.id}.admins`, args[2]);
                    let user = client.users.cache.get(args[2]);
                    message.reply({ content: `> :white_check_mark: **تم أضافة \`${user.username}\` لـلأدمنز**`, ephemeral: true })
                }
            }
        } else if (lang == "en") {
            if (args[1] == "prefix") {
                if (!args[2]) return message.reply({ content: '> :x: **You Have To Type The New Perfix**', ephemeral: true })
                db.set(`Settings_${message.guild.id}`, {
                    prefix: args[2],
                    lang: lang,
                    admins: admins
                });
                message.reply({ content: `> :white_check_mark: **Done The New Prefix Is :\`${args[2]}\`**`, ephemeral: true })
            } else if (args[1] == "lang") {
                if (!args[2]) return message.reply({ content: '> :x: **You Have To Type The New Lang**', ephemeral: true });
                if (!args[2] == "ar") return message.reply({ content: '> :x: **The Crunter Langs Is: [\'en\', \'ar\']**', ephemeral: true });
                else if (!args[2] == "en") return message.reply({ content: '> :x: **The Crunter Langs Is: [\'en\', \'ar\']**', ephemeral: true });
                else {
                    db.set(`Settings_${message.guild.id}`, {
                        prefix: prefix,
                        lang: args[2],
                        admins: admins
                    });
                    message.reply({ content: `> :white_check_mark: **Done The New Lang Is : \`${args[2]}\`**`, ephemeral: true })
                }
            } else if (args[1] == "admins") {
                if (!args[2]) return message.reply({ content: '> :x: **You HAve To Type The Id Of The New Admin**', ephemeral: true });
                if (isNaN(args[2])) return message.reply({ content: '> :x: **The Id Must Be Numbers**', ephemeral: true });
                if (admins.includes(args[2])) return message.reply({ content: '> :x: **This User Is Already In Allowed Admins**', ephemeral: true });
                else {
                    db.push(`Settings_${message.guild.id}.admins`, args[2]);
                    let user = client.users.cache.get(args[2]);
                    message.reply({
                        content: `> :white_check_mark: **Done \`${user.username}\` Is Now An Admin**`,
                        ephemeral: true
                    })
                }
            } else {
                if (!args[1]) {
                    if (lang == "ar") {
                        message.reply({
                            content: ' > :x: يرجى تحديد ثاني كلمه: [\'prefix\',\'lang\',\'admins\',\'servers\']',
                            ephemeral: true
                        });
                    } else if (lang == "en") {
                        message.reply({
                            content: ' > :x: Please Specify The Second Argument: [\'prefix\',\'lang\',\'admins\',\'servers\']',
                            ephemeral: true
                        });
                    }
                }
            }
        } else message.reply({
            content: '> :x: **please restat the bot to regenerat bot settings**',
            ephemeral: true
        })
    }
};