const dateFormat = require("dateformat");

async function guildMemberAddFunction(member, db) {
    let toggle = db.fetch(`AntiBots_${member.guild.id}`);
    if (toggle == "on") {
        if (member.user.bot) {
            client.users.cache.get(interaction.guild.ownerId).send(`> 🤖 **<@!${member.user.id}> has kicked by \`anti-bots\`**`)
            member.ban();
        }
    }
    let toggle2 = db.fetch(`AntiTokens_${member.guild.id}`);
    if (toggle2 == "on") {
        if (!member.user.bot) {
            const millis = new Date().getTime() - member.user.createdAt.getTime();
            const now = new Date();
            dateFormat(now, "dddd, mmmm dS, yyyy");
            const days = millis / 1000 / 60 / 60 / 24;
            dateFormat(now, "dddd, mmmm dS, yyyy");
            if (member.user.bot) return;
            let time = await db.fetch(`AntiTokensTime_${member.guild.id}`);
            let userCt = days.toFixed(0);
            if (time > userCt) {
                member.kick();
            }
        }
    }
    let toggle3 = db.fetch(`AutoRoleToggle_${member.guild.id}`);
    if (toggle3 == "on") {
        let data = db.fetch(`AutoRole_${member.guild.id}`);
        let role = member.guild.roles.cache.get(data);
        member.roles.add(role).catch(() => { return });
    }
}

module.exports.get = guildMemberAddFunction;