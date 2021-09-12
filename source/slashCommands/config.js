const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const db = require('quick.db');

module.exports = {
        name: "config",
        description: "See The Server Data",
        type: 'CHAT_INPUT',

        /**
         *
         * @param {Client} client
         * @param {CommandInteraction} interaction
         * @param {String[]} args
         */

        run: async(client, interaction, args) => {
                let settings = db.fetch(`Settings_${interaction.guild.id}`);
                let lang = settings.lang;
                let embed = new MessageEmbed()
                    .setAuthor('Settings 🛠️', interaction.guild.iconURL({ dynamic: true }), 'https://discord.gg/developer-support')
                    .addField('Anti:',
                        `**❯ Links:** ${db.fetch(`AntiLinks_${interaction.guild.id}`)}, ${db.get(`AntiLinksArray_${interaction.guild.id}.data`)} \n` +
                `**❯ Swear:** ${db.fetch(`AntiSwear_${interaction.guild.id}`)}, ${db.get(`AntiSwearArray_${interaction.guild.id}.data`)} \n` +
                `**❯ Bots:** ${db.fetch(`AntiBots_${interaction.guild.id}`)} \n` +
                `**❯ Spam:** ${db.fetch(`AntiSpam_${interaction.guild.id}`)} \n` +
                `**❯ Tokens:** ${db.fetch(`AntiTokens_${interaction.guild.id}`)}, ${db.fetch(`AntiTokensTime_${interaction.guild.id}`)}`
                , false)
                    .addField('Limit:',
                `**❯ RoleCreate:** ${db.fetch(`RoleCreateToggle_${interaction.guild.id}`)}, ${db.fetch(`RoleCreate_${interaction.guild.id}`)}\n` +
                `**❯ RoleDelete:** ${db.fetch(`RoleDeleteToggle_${interaction.guild.id}`)}, ${db.fetch(`RoleDelete_${interaction.guild.id}`)}\n` +
                `**❯ ChannelCreate:** ${db.fetch(`ChannelCreateToggle_${interaction.guild.id}`)}, ${db.fetch(`ChannelCreate_${interaction.guild.id}`)}\n` +
                `**❯ ChannelDelete:** ${db.fetch(`ChannelDeleteToggle_${interaction.guild.id}`)}, ${db.fetch(`ChannelDelete_${interaction.guild.id}`)}\n` +
                `**❯ MembersBan:** ${db.fetch(`MembersBanToggle_${interaction.guild.id}`)}, ${db.fetch(`MemebersBan_${interaction.guild.id}`)}\n`, false)
                    .addField('Settings:',
                `**❯ AutoRole:** ${db.fetch(`AutoRoleToggle_${interaction.guild.id}`)}, ${db.fetch(`AutoRole_${interaction.guild.id}`)}`,
                `**❯ Prefix:** ${settings.prefix}`,
                `**❯ Lang:** ${settings.lang}`,
                `**❯ Admins:** ${settings.admins}`, false)
interaction.reply({ embeds: [embed], ephemeral: true });
    },
};