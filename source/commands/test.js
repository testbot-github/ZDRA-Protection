const { Client, Message, Guild } = require("discord.js");


module.exports = {
    name: "",
    aliases: [""],

    /**
     * 
     * @param {Client} client
     * @param {Message} message
     * @param {Guild} guild
     */

    run: async(client, message, args, prefix, lang, admins, db, MessageEmbed) => {
        message.reply({ content: 'okay', ephemeral: true })
    }
};