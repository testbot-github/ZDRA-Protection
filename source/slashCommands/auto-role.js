const { Client, CommandInteraction } = require("discord.js");
const db = require('quick.db');

module.exports = {
    name: "auto-role",
    description: "Set A Auto Role For New Member!.",
    type: 'CHAT_INPUT',
    options: [{
        name: "role",
        description: "The Role That What The Bot Will Give To The New Member!.",
        type: "ROLE",
        required: true
    }, {
        name: "toggle",
        description: "The Toggle Of Auto Role System!.",
        type: "STRING",
        required: true
    }],

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async(client, interaction, args) => {
        let settings = db.fetch(`Settings_${interaction.guild.id}`);
        let lang = settings.lang;
        let role = interaction.options.getRole('role').id;
        let toggle = interaction.options.getString('toggle');
        if (lang == "ar") {
            let tg;
            if (toggle == "on") {
                db.set(`AutoRoleToggle_${interaction.guild.id}`, "on");
                tg = 'تفعيل';
            } else if (toggle == "off") {
                db.set(`AutoRoleToggle_${interaction.guild.id}`, "off");
                tg = 'تعطيل';
            } else interaction.reply({ content: `> :x: **الخيار الثاني يجب ان يكون \`on\` أو \`off\`**`, ephemeral: true });
            db.set(`AutoRole_${interaction.guild.id}`, role);
            interaction.reply({ content: `> :white_check_mark: **تم ${tg} نظام الرومات التلقائيه, الرتبة التلقائيه <@&${role}>**`, ephemeral: true })
        } else if (lang == "en") {
            let tg;
            if (toggle == "on") {
                db.set(`AutoRoleToggle_${interaction.guild.id}`, "on");
                tg = 'Active';
            } else if (toggle == "off") {
                db.set(`AutoRoleToggle_${interaction.guild.id}`, "off");
                tg = 'Disable';
            } else interaction.reply({ content: `> :x: **The Second Argument Have To Be \`on\` or \`off\`**`, ephemeral: true });
            db.set(`AutoRole_${interaction.guild.id}`, role);
            interaction.reply({ content: `> :white_check_mark: **The Auto Role System Is ${tg}, The Auto Role Is <@&${role}>**`, ephemeral: true })
        }
    },
};