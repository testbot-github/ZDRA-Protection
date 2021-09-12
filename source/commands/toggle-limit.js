const { Client, Message, Guild } = require("discord.js");


module.exports = {
    name: "toggle-limit",
    aliases: [""],

    /**
     * 
     * @param {Client} client
     * @param {Message} message
     * @param {Guild} guild
     */

    run: async(client, message, args, prefix, lang, admins, db, MessageEmbed) => {
        if (lang === 'ar') {
            if (args[2] === 'on') {
                if (args[1] === 'RoleCreate') {
                    message.reply({ conten: `> :white_check_mark:  **تم وضع حالة حماية صنع الروملات لـ\`ON\`**`, ephemeral: true })
                    db.set(`RoleCreateToggle_${message.guild.id}`, 'on')
                } else if (args[1] === 'RoleDelete') {
                    message.reply({ conten: `> :white_check_mark:  **تم وضع حالة حماية حزف الروملات لـ\`ON\``, ephemeral: true })
                    db.set(`RoleDeleteToggle_${message.guild.id}`, 'on')
                } else if (args[1] === 'ChannelCreate') {
                    message.reply({ conten: `> :white_check_mark:  **تم وضع حالة حماية صنع الشنلات لـ\`ON\``, ephemeral: true })
                    db.set(`ChannelCreateToggle_${message.guild.id}`, 'on')
                } else if (args[1] === 'ChannelDelete') {
                    message.reply({ conten: `> :white_check_mark:  **تم وضع حالة حماية حزف الشنلات لـ\`ON\``, ephemeral: true })
                    db.set(`ChannelDeleteToggle_${message.guild.id}`, 'on')
                } else if (args[1] === 'MembersBan') {
                    message.reply({ conten: `> :white_check_mark:  **تم وضع حالة حماية الباندات لـ\`ON\``, ephemeral: true })
                    db.set(`MembersBanToggle_${message.guild.id}`, 'on')
                } else message.reply({ content: `> :x:  **الخيرات المتوفره ك كلمة اوله: ['RoleCreate','RoleDelete','ChannelCreate','ChannelDelete','MembersBan']**` })
            } else if (args[2] === 'off') {
                if (args[1] === 'RoleCreate') {
                    message.reply({ conten: ``, ephemeral: true })
                    db.set(`RoleCreateToggle_${message.guild.id}`, 'off')
                } else if (args[1] === 'RoleDelete') {
                    message.reply({ conten: ``, ephemeral: true })
                    db.set(`RoleDeleteToggle_${message.guild.id}`, 'off')
                } else if (args[1] === 'ChannelCreate') {
                    message.reply({ conten: ``, ephemeral: true })
                    db.set(`ChannelCreateToggle_${message.guild.id}`, 'off')
                } else if (args[1] === 'ChannelDelete') {
                    message.reply({ conten: `` })
                    db.set(`ChannelDeleteToggle_${message.guild.id}`, 'off')
                } else if (args[1] === 'MembersBan') {
                    message.reply({ conten: ``, ephemeral: true })
                    db.set(`MembersBanToggle_${message.guild.id}`, 'off')
                } else message.reply({ content: `> :x:  **الخيرات المتوفره ك كلمة اوله: ['RoleCreate','RoleDelete','ChannelCreate','ChannelDelete','MembersBan']**` })
            } else if (args[2] !== 'on' || args[2] !== 'off') {
                message.reply({ content: `> :x:  **الخيرات المتوفره ك كلمة ثانيه: ['on','off']`, ephemeral: true })
            }
        } else if (lang === 'en') {
            if (args[2] === 'on') {
                if (args[1] === 'RoleCreate') {
                    message.reply({ content: `> :white_check_mark:  Done Set The Role Create To ON`, ephemeral: true })
                    db.set(`RoleCreateToggle_${message.guild.id}`, 'on')
                } else if (args[1] === 'RoleDelete') {
                    message.reply({ content: `> :white_check_mark:  Done Set The Role Delete To ON`, ephemeral: true })
                    db.set(`RoleDeleteToggle_${message.guild.id}`, 'on')
                } else if (args[1] === 'ChannelCreate') {
                    message.reply({ content: `> :white_check_mark:  Done Set The Channel Create To ON`, ephemeral: true })
                    db.set(`ChannelCreateToggle_${message.guild.id}`, 'on')
                } else if (args[1] === 'ChannelDelete') {
                    message.reply({ content: `> :white_check_mark:  Done Set The Channel Delete To ON`, ephemeral: true })
                    db.set(`ChannelDeleteToggle_${message.guild.id}`, 'on')
                } else if (args[1] === 'MembersBan') {
                    message.reply({ content: `> :white_check_mark:  Done Set The Members Ban To ON`, ephemeral: true })
                    db.set(`MembersBanToggle_${message.guild.id}`, 'on')
                }
            } else if (args[2] === 'off') {
                if (args[1] === 'RoleCreate') {
                    message.reply({ content: `> :x:  Done Set The Role Create To OFF`, ephemeral: true })
                    db.set(`RoleCreateToggle_${message.guild.id}`, 'off')
                } else if (args[1] === 'RoleDelete') {
                    message.reply({ content: `> :x:  Done Set The Role Delete To OFF`, ephemeral: true })
                    db.set(`RoleDeleteToggle_${message.guild.id}`, 'off')
                } else if (args[1] === 'ChannelCreate') {
                    message.reply({ content: `> :x:  Done Set The Channel Create To OFF`, ephemeral: true })
                    db.set(`ChannelCreateToggle_${message.guild.id}`, 'off')
                } else if (args[1] === 'ChannelDelete') {
                    message.reply({ content: `> :x:  Done Set The Channel Delete To OFF`, ephemeral: true })
                    db.set(`ChannelDeleteToggle_${message.guild.id}`, 'off')
                } else if (args[1] === 'MembersBan') {
                    message.reply({ content: `> :x:  Done Set The Members Ban To OFF`, ephemeral: true })
                    db.set(`MembersBanToggle_${message.guild.id}`, 'off')
                }
            } else if (args[2] !== 'on' || args[2] !== 'off') {
                message.reply({ content: `> :x:  Incorrect Option!! Sellect \`['on', 'off']\``, ephemeral: true })
            }
        }
    }
};