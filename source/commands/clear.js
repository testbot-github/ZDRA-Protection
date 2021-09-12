const { Client, Message, Guild } = require("discord.js");


module.exports = {
    name: "clear",
    aliases: [""],

    /**
     * 
     * @param {Client} client
     * @param {Message} message
     * @param {Guild} guild
     */

    run: async(client, message, args, prefix, lang, admins, db, MessageEmbed) => {
        let messagecount = parseInt(args[2]) || '100';
        let channel = message.mentions.channels.first() || message.channel;
        if (lang == "ar") {
            if (messagecount > 100) return message.reply({ content: `> :x: **لا يمكن حزف اكثر من 100 رساله**`, ephemeral: true });
            channel.messages.fetch({ limit: 100 }).then(() => channel.bulkDelete(messagecount)).then(msgs => {
                message.reply({ content: `> :wastebasket: **تم حزف \`${msgs.size}\` رساله**`, ephemeral: true })
            });
        } else if (lang == "en") {
            if (messagecount > 100) return message.reply({ content: `> :x: **I Can't Delete More Than 100 Message**`, ephemeral: true });
            channel.messages.fetch({ limit: 100 }).then(() => channel.bulkDelete(messagecount)).then(msgs => {
                message.reply({ content: `> :wastebasket: **\`${msgs.size}\` Messages Has removed in <#${channel.id}>**`, ephemeral: true })
            });
        }
    }
};