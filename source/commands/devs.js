const { Client, Message, Guild } = require("discord.js");


module.exports = {
    name: "devs",
    aliases: [""],

    /**
     * 
     * @param {Client} client
     * @param {Message} message
     * @param {Guild} guild
     */

    run: async(client, message, args, prefix, lang, admins, db, MessageEmbed) => {
        let embed = new MessageEmbed()
            .setAuthor('ZRDA Protectin!.', client.user.avatarURL({ dynamic: true }), 'https://discord.gg/developer-support')
            .setColor('DARK_GOLD')
            .addFields({
                name: "Developers name",
                value: "ニロ, ᴹᵃᴿˢ#3121, 【H2】Cyber#1111",
                inline: true
            }, {
                name: "bot github page",
                value: '[Here](https://github.com/DevelopersSupportAR/ZDRA-Protection.git)',
                inline: true
            }, {
                name: "bot support server",
                value: "[Here](https://discord.gg/developer-support)",
                inline: true
            })
            .setImage("https://cdn.discordapp.com/attachments/759537850919944233/885901299395207219/Screenshot_2021-09-10-16-53-58-19_3a637037d35f95c5dbcdcc75e697ce91.png");
        message.reply({ embeds: [embed], allowedMentions: false })
    }
};