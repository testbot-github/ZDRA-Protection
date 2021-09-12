const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const db = require('quick.db');

module.exports = {
    name: "warn",
    description: "Warn A Member!.",
    type: 'CHAT_INPUT',
    options: [{
        name: "user",
        description: "The User Will Warn!.",
        type: "USER",
        required: true
    }],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async(client, interaction, args) => {
        let user = interaction.guild.members.cache.get(interaction.options.getUser('user').id);
        var warns = await db.fetch(`warns_${interaction.guild.id}_${interaction.user.id}`);
        if (warns == null) db.set(`warns_${interaction.guild.id}_${interaction.user.id}`, {
            warns: 1
        });
        if (warns == 3) {
            client.users.cache.get(interaction.guild.ownerId).send(`<@!${user.id}> Has Benn Rished 3 Warns!`)
        }
        if (warns == 10) {
            client.users.cache.get(interaction.guild.ownerId).send(`<@!${user.id}> Has Benn Rished 10 Warns!`)
        }
        if (warns == 20) {
            client.users.cache.get(interaction.guild.ownerId).send(`<@!${user.id}> Has Benn Rished 20 Warns!`)
        }
        if (warns == 30) {
            client.users.cache.get(interaction.guild.ownerId).send(`<@!${user.id}> Has Benn Rished 30 Warns!`)
        }
        if (warns == 40) {
            client.users.cache.get(interaction.guild.ownerId).send(`<@!${user.id}> Has Benn Rished 40 Warns!`)
        }
        if (warns == 50) {
            client.users.cache.get(interaction.guild.ownerId).send(`<@!${user.id}> Has Benn Rished 50 Warns!`)
        }
        if (warns == 60) {
            client.users.cache.get(interaction.guild.ownerId).send(`<@!${user.id}> Has Benn Rished 60 Warns!`)
        }
        if (warns == 70) {
            client.users.cache.get(interaction.guild.ownerId).send(`<@!${user.id}> Has Benn Rished 70 Warns!`)
        }
        if (warns == 90) {
            client.users.cache.get(interaction.guild.ownerId).send(`<@!${user.id}> Has Benn Rished 90 Warns!`)
        }
        if (warns == 100) {
            client.users.cache.get(interaction.guild.ownerId).send(`<@!${user.id}> Has Benn Rished 100 Warns!`)
        }
        db.add(`warns_${interaction.guild.id}_${interaction.user.id}.warns`, 1)
        try {
            let embed1 = new MessageEmbed()
                .setDescription('**> :warning: You were warned!**')
                .setFooter(interaction.guild.name, interaction.guild.iconURL()).setTimestamp().setColor("YELLOW");
            user.send({
                content: "_ _",
                embeds: [embed1],
                ephemeral: true
            });
            interaction.reply({
                content: `> :warning: **Done Warned <@!${user.id}>**`,
                ephemeral: true
            });
        } catch (err) {
            return;
        }
    },
};