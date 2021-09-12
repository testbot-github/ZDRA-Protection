const { Client, Message, Guild } = require("discord.js");


module.exports = {
    name: "slow-mode",
    aliases: [""],

    /**
     * 
     * @param {Client} client
     * @param {Message} message
     * @param {Guild} guild
     */

    run: async(client, message, args, prefix, lang, admins, db, MessageEmbed) => {
        let channel = message.mentions.channels.first() || client.channels.cache.get(args[1]) || message.channel;
        let value = args[2] || args[1];
        if (lang == 'ar') {
            channel.setRateLimitPerUser(Number(value));
            message.reply(`> :white_check_mark: **تم تعديل وضع التبطيئ في هذه قناة <#${channel.id}> الي \`${value}\`**`)
        } else if (lang == 'en') {
            channel.setRateLimitPerUser(Number(value));
            message.reply(`> :white_check_mark: **<#${channel.id}> Slow Mode Has Set To \`${value}\`**`);
        }
    }
};