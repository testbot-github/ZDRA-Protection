const { Client, Message, Guild } = require("discord.js");


module.exports = {
    name: "add-links",
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
            let checker = db.get(`AntiLinksArray_${message.guild.id}.data`);
            if (checker == null) return db.set(`AntiLinksArray_${message.guild.id}`, { data: ['discord.gg', 'https', 'http', 'www'] });
            if (checker.includes(word)) return message.reply({ content: '> :x: **هذا الرابط موجوده مسبقا**', ephemeral: true });
            if (!word) return message.reply({ content: '> :x: **يرجى كتابة الرابط الممنوع**', ephemeral: true });
            db.push(`AntiLinksArray_${message.guild.id}.data`, word);
            message.reply({ content: `> ✅ **تم أضافى كلمة \`${word}\`**`, ephemeral: true })
        } else if (lang == "en") {
            let word = message.content.split(' ').slice(1).join(' ');
            let checker = db.get(`AntiLinksArray_${message.guild.id}.data`);
            if (checker == null) return db.set(`AntiLinksArray_${message.guild.id}`, { data: ['discord.gg', 'https', 'http', 'www'] });
            if (checker.includes(word)) return message.reply({ content: '> :x: **This Link Is Alread Added**', ephemeral: true });
            if (!word) return message.reply({ content: '> :x: **Please Type The Link**', ephemeral: true });
            db.push(`AntiLinksArray_${message.guild.id}.data`, word);
            message.reply({ content: `> ✅ **Done The \`${word}\` Is Now Blocked**`, ephemeral: true })
        }
    }
};