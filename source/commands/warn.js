const { Client, Message, Guild } = require("discord.js");


module.exports = {
    name: "warn",
    aliases: [""],

    /**
     * 
     * @param {Client} client
     * @param {Message} message
     * @param {Guild} guild
     */

    run: async(client, message, args, prefix, lang, admins, db, MessageEmbed) => {
        let user = message.mentions.members.first() || client.users.cache.get(args[1]);
        var warns = await db.fetch(`warns_${message.guild.id}_${message.author.id}`);
        if (warns == null) db.set(`warns_${message.guild.id}_${message.author.id}`, {
            warns: 1
        });
        if (warns == 3) {
            message.guild.owner.send(`<@!${user.id}> Has Benn Rished 3 Warns!`)
        }
        if (warns == 10) {
            message.guild.owner.send(`<@!${user.id}> Has Benn Rished 10 Warns!`)
        }
        if (warns == 20) {
            message.guild.owner.send(`<@!${user.id}> Has Benn Rished 20 Warns!`)
        }
        if (warns == 30) {
            message.guild.owner.send(`<@!${user.id}> Has Benn Rished 30 Warns!`)
        }
        if (warns == 40) {
            message.guild.owner.send(`<@!${user.id}> Has Benn Rished 40 Warns!`)
        }
        if (warns == 50) {
            message.guild.owner.send(`<@!${user.id}> Has Benn Rished 50 Warns!`)
        }
        if (warns == 60) {
            message.guild.owner.send(`<@!${user.id}> Has Benn Rished 60 Warns!`)
        }
        if (warns == 70) {
            message.guild.owner.send(`<@!${user.id}> Has Benn Rished 70 Warns!`)
        }
        if (warns == 90) {
            message.guild.owner.send(`<@!${user.id}> Has Benn Rished 90 Warns!`)
        }
        if (warns == 100) {
            message.guild.owner.send(`<@!${user.id}> Has Benn Rished 100 Warns!`)
        }
        db.add(`warns_${message.guild.id}_${message.author.id}.warns`, 1)
        try {
            let embed1 = new MessageEmbed()
                .setDescription('**> :warning: You were warned!**')
                .setFooter(message.guild.name, message.guild.iconURL()).setTimestamp().setColor("YELLOW");
            user.send({
                content: "_ _",
                embeds: [embed1],
                ephemeral: true
            });
            message.reply({
                content: `> :warning: **Done Warned <@!${user.id}>**`,
                ephemeral: true
            });
        } catch (err) {
            return;
        }
    }
};