const { Client, CommandInteraction } = require("discord.js");
const db = require('quick.db');

module.exports = {
    name: "toggel-limit",
    description: "Toggel The Limit Commands",
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
        try {
            let settings = db.fetch(`Settings_${interaction.guild.id}`);
            let lang = settings.lang;
            if (lang === 'ar') {
                if (interaction.options.getString('value') === 'on') {
                    if (interaction.options.getString('input') === 'RoleCreate') {
                        interaction.reply({ conten: `> :white_check_mark:  **تم وضع حالة حماية صنع الروملات لـ\`ON\`**`, ephemeral: true })
                        db.set(`RoleCreateToggle_${interaction.guild.id}`, 'on')
                    } else if (interaction.options.getString('input') === 'RoleDelete') {
                        interaction.reply({ conten: `> :white_check_mark:  **تم وضع حالة حماية حزف الروملات لـ\`ON\``, ephemeral: true })
                        db.set(`RoleDeleteToggle_${interaction.guild.id}`, 'on')
                    } else if (interaction.options.getString('input') === 'ChannelCreate') {
                        interaction.reply({ conten: `> :white_check_mark:  **تم وضع حالة حماية صنع الشنلات لـ\`ON\``, ephemeral: true })
                        db.set(`ChannelCreateToggle_${interaction.guild.id}`, 'on')
                    } else if (interaction.options.getString('input') === 'ChannelDelete') {
                        interaction.reply({ conten: `> :white_check_mark:  **تم وضع حالة حماية حزف الشنلات لـ\`ON\``, ephemeral: true })
                        db.set(`ChannelDeleteToggle_${interaction.guild.id}`, 'on')
                    } else if (interaction.options.getString('input') === 'MembersBan') {
                        interaction.reply({ conten: `> :white_check_mark:  **تم وضع حالة حماية الباندات لـ\`ON\``, ephemeral: true })
                        db.set(`MembersBanToggle_${interaction.guild.id}`, 'on')
                    } else interaction.reply({ content: `> :x:  **الخيرات المتوفره ك كلمة اوله: ['RoleCreate','RoleDelete','ChannelCreate','ChannelDelete','MembersBan']**` })
                } else if (interaction.options.getString('value') === 'off') {
                    if (interaction.options.getString('input') === 'RoleCreate') {
                        interaction.reply({ conten: `> :white_check_mark:  **تم وضع حالة حماية صنع الروملات لـ\`OFF\`**`, ephemeral: true })
                        db.set(`RoleCreateToggle_${interaction.guild.id}`, 'off')
                    } else if (interaction.options.getString('input') === 'RoleDelete') {
                        interaction.reply({ conten: `> :white_check_mark:  **تم وضع حالة حماية حزف الروملات لـ\`OFF\``, ephemeral: true })
                        db.set(`RoleDeleteToggle_${interaction.guild.id}`, 'off')
                    } else if (interaction.options.getString('input') === 'ChannelCreate') {
                        interaction.reply({ conten: `> :white_check_mark:  **تم وضع حالة حماية صنع الشنلات لـ\`OFF\``, ephemeral: true })
                        db.set(`ChannelCreateToggle_${interaction.guild.id}`, 'off')
                    } else if (interaction.options.getString('input') === 'ChannelDelete') {
                        interaction.reply({ conten: `> :white_check_mark:  **تم وضع حالة حماية حزف الشنلات لـ\`OFF\``, ephemeral: true })
                        db.set(`ChannelDeleteToggle_${interaction.guild.id}`, 'off')
                    } else if (interaction.options.getString('input') === 'MembersBan') {
                        interaction.reply({ conten: `> :white_check_mark:  **تم وضع حالة حماية الباندات لـ\`OFF\``, ephemeral: true })
                        db.set(`MembersBanToggle_${interaction.guild.id}`, 'off')
                    } else interaction.reply({ content: `> :x:  **الخيرات المتوفره ك كلمة اوله: ['RoleCreate','RoleDelete','ChannelCreate','ChannelDelete','MembersBan']**` })
                } else if (interaction.options.getString('value') !== 'on' || interaction.options.getString('value') !== 'off') {
                    interaction.reply({ content: `> :x:  **الخيرات المتوفره ك كلمة ثانيه: ['on','off']**`, ephemeral: true })
                }
            } else if (lang === 'en') {
                if (interaction.options.getString('value') === 'on') {
                    if (interaction.options.getString('input') === 'RoleCreate') {
                        interaction.reply({ content: `> :white_check_mark:  Done Set The Role Create To ON`, ephemeral: true })
                        db.set(`RoleCreateToggle_${interaction.guild.id}`, 'on')
                    } else if (interaction.options.getString('input') === 'RoleDelete') {
                        interaction.reply({ content: `> :white_check_mark:  Done Set The Role Delete To ON`, ephemeral: true })
                        db.set(`RoleDeleteToggle_${interaction.guild.id}`, 'on')
                    } else if (interaction.options.getString('input') === 'ChannelCreate') {
                        interaction.reply({ content: `> :white_check_mark:  Done Set The Channel Create To ON`, ephemeral: true })
                        db.set(`ChannelCreateToggle_${interaction.guild.id}`, 'on')
                    } else if (interaction.options.getString('input') === 'ChannelDelete') {
                        interaction.reply({ content: `> :white_check_mark:  Done Set The Channel Delete To ON`, ephemeral: true })
                        db.set(`ChannelDeleteToggle_${interaction.guild.id}`, 'on')
                    } else if (interaction.options.getString('input') === 'MembersBan') {
                        interaction.reply({ content: `> :white_check_mark:  Done Set The Members Ban To ON`, ephemeral: true })
                        db.set(`MembersBanToggle_${interaction.guild.id}`, 'on')
                    }
                } else if (interaction.options.getString('value') === 'off') {
                    if (interaction.options.getString('input') === 'RoleCreate') {
                        interaction.reply({ content: `> :x:  Done Set The Role Create To OFF`, ephemeral: true })
                        db.set(`RoleCreateToggle_${interaction.guild.id}`, 'off')
                    } else if (interaction.options.getString('input') === 'RoleDelete') {
                        interaction.reply({ content: `> :x:  Done Set The Role Delete To OFF`, ephemeral: true })
                        db.set(`RoleDeleteToggle_${interaction.guild.id}`, 'off')
                    } else if (interaction.options.getString('input') === 'ChannelCreate') {
                        interaction.reply({ content: `> :x:  Done Set The Channel Create To OFF`, ephemeral: true })
                        db.set(`ChannelCreateToggle_${interaction.guild.id}`, 'off')
                    } else if (interaction.options.getString('input') === 'ChannelDelete') {
                        interaction.reply({ content: `> :x:  Done Set The Channel Delete To OFF`, ephemeral: true })
                        db.set(`ChannelDeleteToggle_${interaction.guild.id}`, 'off')
                    } else if (interaction.options.getString('input') === 'MembersBan') {
                        interaction.reply({ content: `> :x:  Done Set The Members Ban To OFF`, ephemeral: true })
                        db.set(`MembersBanToggle_${interaction.guild.id}`, 'off')
                    }
                } else if (interaction.options.getString('value') !== 'on' || interaction.options.getString('value') !== 'off') {
                    interaction.reply({ content: `> :x:  Incorrect Option!! Sellect \`['on', 'off']\``, ephemeral: true })
                }
            }
        } catch (err) {
            console.log(er)
        }
    },
};