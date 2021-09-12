const { Client, CommandInteraction } = require("discord.js");
const db = require('quick.db');

module.exports = {
    name: "setting",
    description: "Change Bot Settings!.",
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
        let admins = settings.admins;
        let servers = settings.servers;
        let prefix = settings.prefix;
        let input = interaction.options.getString('input');
        if (lang == "ar") {
            if (input == "prefix") {
                db.set(`Settings_${interaction.guild.id}`, {
                    prefix: interaction.options.getString('value'),
                    lang: lang,
                    admins: admins,
                    servers: servers
                });
                interaction.reply({ content: `> :white_check_mark: **تم تغير بادءة البوت  لـ\`${interaction.options.getString('value')}\`**`, ephemeral: true })
            } else if (input == "lang") {
                if (interaction.options.getString('value') == "ar") {
                    db.set(`Settings_${interaction.guild.id}`, {
                        prefix: prefix,
                        lang: interaction.options.getString('value'),
                        admins: admins,
                        servers: servers
                    });
                    interaction.reply({ content: `> :white_check_mark: **تم تغير الغه  لـ\`${interaction.options.getString('value')}\`**`, ephemeral: true })
                } else if (interaction.options.getString('value') == "en") {
                    db.set(`Settings_${interaction.guild.id}`, {
                        prefix: prefix,
                        lang: interaction.options.getString('value'),
                        admins: admins,
                        servers: servers
                    });
                    interaction.reply({ content: `> :white_check_mark: **تم تغير الغه  لـ\`${interaction.options.getString('value')}\`**`, ephemeral: true })
                } else return interaction.reply({ content: '> :x: **الغات المتوفه: [\'en\', \'ar\']**', ephemeral: true });
            } else if (input == "admins") {
                if (isNaN(interaction.options.getString('value'))) return interaction.reply({ content: '> :x: **يجب ان يكون اي دي الأدمن متكون من ارقام**', ephemeral: true });
                if (admins.includes(interaction.options.getString('value'))) return interaction.reply({ content: '> :x: **هذا الشخص موجود مسبقا**', ephemeral: true });
                else {
                    db.push(`Settings_${interaction.guild.id}.admins`, interaction.options.getString('value'));
                    let user = client.users.cache.get(interaction.options.getString('value'));
                    interaction.reply({ content: `> :white_check_mark: **تم أضافة \`${user.username}\` لـلأدمنز**`, ephemeral: true })
                }
            } else if (input == "servers") {
                if (isNaN(interaction.options.getString('value'))) return interaction.reply({ content: '> :x: **يجب ان يكون اي دي السيرفر متكون من ارقام**', ephemeral: true });
                if (servers.includes(interaction.options.getString('value'))) return interaction.reply({ content: '> :x: **هذا السيرفر موجود مسبقا**', ephemeral: true });
                else {
                    db.push(`Settings_${interaction.guild.id}.servers`, interaction.options.getString('value'));
                    let guild = client.guilds.cache.get(interaction.options.getString('value'));
                    if (guild == null || guild == undefined || !guild) return interaction.reply({ content: '> :x: **لم يتم العثور على هذه المنصه `تأكد ان البوت مدعو الى هذا السيرفر`**', ephemeral: true });
                    interaction.reply({ content: `> :white_check_mark: **تم أضافة \`${guild.name}\` لـلسيرفرات المفعله**`, ephemeral: true })
                }
            } else {
                interaction.reply({
                    content: ' > :x: يرجى تحديد ثاني كلمه: [\'prefix\',\'lang\',\'admins\',\'servers\']',
                    ephemeral: true
                });
            }
        } else if (lang == "en") {
            if (input == "prefix") {
                db.set(`Settings_${interaction.guild.id}`, {
                    prefix: interaction.options.getString('value'),
                    lang: lang,
                    admins: admins,
                    servers: servers
                });
                interaction.reply({ content: `> :white_check_mark: **Done The New Prefix Is :\`${interaction.options.getString('value')}\`**`, ephemeral: true })
            } else if (input == "lang") {
                if (!interaction.options.getString('value') == "ar") return interaction.reply({ content: '> :x: **The Crunter Langs Is: [\'en\', \'ar\']**', ephemeral: true });
                else if (!interaction.options.getString('value') == "en") return interaction.reply({ content: '> :x: **The Crunter Langs Is: [\'en\', \'ar\']**', ephemeral: true });
                else {
                    db.set(`Settings_${interaction.guild.id}`, {
                        prefix: prefix,
                        lang: interaction.options.getString('value'),
                        admins: admins,
                        servers: servers
                    });
                    interaction.reply({ content: `> :white_check_mark: **Done The New Lang Is : \`${interaction.options.getString('value')}\`**`, ephemeral: true })
                }
            } else if (input == "admins") {
                if (isNaN(interaction.options.getString('value'))) return interaction.reply({ content: '> :x: **The Id Must Be Numbers**', ephemeral: true });
                if (admins.includes(interaction.options.getString('value'))) return interaction.reply({ content: '> :x: **This User Is Already In Allowed Admins**', ephemeral: true });
                else {
                    db.push(`Settings_${interaction.guild.id}.admins`, interaction.options.getString('value'));
                    let user = client.users.cache.get(interaction.options.getString('value'));
                    interaction.reply({
                        content: `> :white_check_mark: **Done \`${user.username}\` Is Now An Admin**`,
                        ephemeral: true
                    })
                }
            } else if (input == "servers") {
                if (isNaN(interaction.options.getString('value'))) return interaction.reply({
                    content: '> :x: **The Id Must Be Numbers**',
                    ephemeral: true
                });
                if (servers.includes(interaction.options.getString('value'))) return interaction.reply({
                    content: '> :x: **This Server Is Already Allowed**',
                    ephemeral: true
                });
                else {
                    db.push(`Settings_${interaction.guild.id}.servers`, interaction.options.getString('value'));
                    let guild = client.guilds.cache.get(interaction.options.getString('value'));
                    if (guild == null || guild == undefined || !guild) return interaction.reply({ content: `> :x: **Couldn\'t Find This Server, Make Sure To Add The Bot To This Guild ** `, ephemeral: true });
                    interaction.reply({
                        content: `> :white_check_mark: **Done Added \`${guild.name}\` To Allowed Servers**`,
                        ephemeral: true
                    })
                }
            } else {
                interaction.reply({
                    content: ' > :x: Please Specify The Second Argument: [\'prefix\',\'lang\',\'admins\',\'servers\']',
                    ephemeral: true
                });
            }
        } else interaction.reply({
            content: '> :x: **please restat the bot to regenerat bot settings**',
            ephemeral: true
        })
    },
};