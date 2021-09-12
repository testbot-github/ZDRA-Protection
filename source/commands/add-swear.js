const { Client, Message, Guild } = require("discord.js");


module.exports = {
    name: "add-swear",
    aliases: [""],

    /**
     * 
     * @param {Client} client
     * @param {Message} message
     * @param {Guild} guild
     */

    run: async(client, message, args, prefix, lang, admins, db, MessageEmbed) => {
        if (lang == "ar") {
            let word = message.content.split(' ').slice(1).join(' ');
            let checker = db.get(`AntiSwearArray_${message.guild.id}.data`);
            if (checker == null) return db.set(`AntiSwearArray_${message.guild.id}`, { data: [] });
            if (checker.includes(word)) return message.reply({ content: '> :x: **هذه السبه موجوده مسبقا**', ephemeral: true });
            if (!word) return message.reply({ content: '> :x: **يرجى كتابة السبه الممنوع**', ephemeral: true });
            db.push(`AntiSwearArray_${message.guild.id}.data`, word);
            message.reply({ content: `> ✅ **تم أضافى السبه \`${word}\`**`, ephemeral: true })
        } else if (lang == "en") {
            let word = message.content.split(' ').slice(1).join(' ');
            let checker = db.get(`AntiSwearArray_${message.guild.id}.data`);
            if (checker == null) return db.set(`AntiSwearArray_${message.guild.id}`, { data: ['fuck', 'de'] });
            if (checker.includes(word)) return message.reply({ content: '> :x: **This Swear Is Alread Added**', ephemeral: true });
            if (!word) return message.reply({ content: '> :x: **Please Type The Swear**', ephemeral: true });
            db.push(`AntiSwearArray_${message.guild.id}.data`, word);
            message.reply({ content: `> ✅ **Done The \`${word}\` Is Now Blocked**`, ephemeral: true })
        }
    }
};