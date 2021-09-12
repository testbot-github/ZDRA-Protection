const { Client, Message, Guild } = require("discord.js");


module.exports = {
    name: "avatar",
    aliases: [""],

    /**
     * 
     * @param {Client} client
     * @param {Message} message
     ** @param {Guild} guild
     */

    run: async(client, message, args, prefix, lang, admins, servers, db, MessageEmbed) => {
        let user = message.mentions.members.first() || client.users.cache.get(args[1]) || message.author;
        let embed = new MessageEmbed()
            .setAuthor(user.username, user.avatarURL({ dynamic: true }))
            .setDescription(`**[Avatar Link](${user.avatarURL({ dynamic: true })})**`)
            .setImage(user.avatarURL({ dynamic: true }))
            .setColor("GREEN")
            .setFooter(user.username, user.avatarURL({ dynamic: true }))
        message.reply({
            embeds: [embed],
            ephemeral: true
        });
    }
};