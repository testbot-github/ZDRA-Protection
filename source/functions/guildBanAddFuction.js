async function guildBanAddFuction(ban, db) {
    let banlimit = db.fetch(`MemebersBan_${ban.guild.id}`)
    let fetch = await ban.guild.fetchAuditLogs({
        type: 'BAN_MEMBER'
    }).then(audit => audit.entries.first()).catch(err => { return });
    if (db.fetch(`MembersBanToggle_${ban.guild.id}`) === 'on') {
        let userlimit = db.fetch(`UDMemebersBan_${fetch.executor.id}_${ban.guild.id}`);
        if (userlimit == null) return db.set(`UDMemebersBan_${fetch.executor.id}_${ban.guild.id}`, 1);
        db.add(`UDMemebersBan_${fetch.executor.id}_${ban.guild.id}`, 1)
        if (userlimit > banlimit) {
            let member = ban.guild.members.cache.get(fetch.executor.id);
            if (member) member.ban();
            db.delete(`UDMemebersBan_${fetch.executor.id}_${ban.guild.id}`)
        }
    } else return undefined;
};

module.exports.get = guildBanAddFuction;