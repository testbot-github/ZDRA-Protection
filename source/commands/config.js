const { Client, Message, Guild } = require("discord.js");


module.exports = {
        name: "config",
        aliases: [""],

        /**
         * 
         * @param {Client} client
         * @param {Message} message
         * @param {Guild} guild
         */

        run: async(client, message, args, prefix, lang, admins, db, MessageEmbed) => {
                let embed = new MessageEmbed()
                    .setAuthor('Settings 🛠️', message.guild.iconURL({ dynamic: true }), 'https://discord.gg/developer-support')
                    .addField('Anti:',
                        `**❯ Links:** ${db.fetch(`AntiLinks_${message.guild.id}`)}, ${db.get(`AntiLinksArray_${message.guild.id}.data`)} \n` +
                            `**❯ Swear:** ${db.fetch(`AntiSwear_${message.guild.id}`)}, ${db.get(`AntiSwearArray_${message.guild.id}.data`)} \n` +
                            `**❯ Bots:** ${db.fetch(`AntiBots_${message.guild.id}`)} \n` +
                            `**❯ Spam:** ${db.fetch(`AntiSpam_${message.guild.id}`)} \n` +
                            `**❯ Tokens:** ${db.fetch(`AntiTokens_${message.guild.id}`)}, ${db.fetch(`AntiTokensTime_${message.guild.id}`)}`
                            , false)
                    .addField('Limit:',
                    `**❯ RoleCreate:** ${db.fetch(`RoleCreateToggle_${message.guild.id}`)}, ${db.fetch(`RoleCreate_${message.guild.id}`)}\n` +
                    `**❯ RoleDelete:** ${db.fetch(`RoleDeleteToggle_${message.guild.id}`)}, ${db.fetch(`RoleDelete_${message.guild.id}`)}\n` +
                    `**❯ ChannelCreate:** ${db.fetch(`ChannelCreateToggle_${message.guild.id}`)}, ${db.fetch(`ChannelCreate_${message.guild.id}`)}\n` +
                    `**❯ ChannelDelete:** ${db.fetch(`ChannelDeleteToggle_${message.guild.id}`)}, ${db.fetch(`ChannelDelete_${message.guild.id}`)}\n` +
                    `**❯ MembersBan:** ${db.fetch(`MembersBanToggle_${message.guild.id}`)}, ${db.fetch(`MemebersBan_${message.guild.id}`)}\n`, false)
        message.reply({ embeds: [embed], ephemeral: true })
    }
};