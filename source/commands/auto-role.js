const { Client, Message, Guild } = require("discord.js");


module.exports = {
    name: "auto-role",
    aliases: [""],

    /**
     * 
     * @param {Client} client
     * @param {Message} message
     * @param {Guild} guild
     */

    run: async(client, message, args, prefix, lang, admins, servers, db, MessageEmbed) => {
        let role = message.mentions.roles.first() || client.roles.cache.get(args[1]);
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
    }
};