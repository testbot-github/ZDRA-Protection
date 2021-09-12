const { Client, Message, Guild } = require("discord.js");


module.exports = {
    name: "time-tokens",
    aliases: [""],

    /**
     * 
     * @param {Client} client
     * @param {Message} message
     * @param {Guild} guild
     */

    run: async(client, message, args, prefix, lang, admins, db, MessageEmbed) => {
        if (lang == "ar") {
            let time = db.fetch(`AntiTokensTime_${message.guild.id}`);
            if (time == null) return db.set(`AntiTokensTime_${message.guild.id}`, 120);
            if (!args[1]) return message.reply({ content: '> :x: **يرجى كتابة عمر الحساب بالأيام**', ephemeral: true });
            db.set(`AntiTokensTime_${message.guild.id}`, Number(args[1]));
            message.reply({ content: `> ✅ **عمر الحسابات المسموح بدخولها هي \`${args[1]}\`**`, ephemeral: true });
        } else if (lang == "en") {
            let time = db.fetch(`AntiTokensTime_${message.guild.id}`);
            if (time == null) return db.set(`AntiTokensTime_${message.guild.id}`, 120);
            if (!args[1]) return message.reply({ content: '> :x: **Please Write The Time (days)**', ephemeral: true });
            db.set(`AntiTokensTime_${message.guild.id}`, Number(args[1]));
            message.reply({ content: `> ✅ **The Tima Of Accounts That Allowed To Join Is \`${args[1]}\`**`, ephemeral: true });
        } else message.reply({ content: '> :x: **please restat the bot to regenerat bot settings**', ephemeral: true });
    }
};