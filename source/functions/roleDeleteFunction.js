async function roleDeleteFunction(role, db) {
    try {
        let roledelete = db.fetch(`RoleDelete_${role.guild.id}`)
        let fetch = await role.guild.fetchAuditLogs({
            type: 'ROLE_DELETE'
        }).then(audit => audit.entries.first()).catch(err => { return })
        if (db.fetch(`RoleDeleteToggle_${role.guild.id}`) === 'on') {
            let userlimit = db.fetch(`UDRoleDelete_${fetch.executor.id}_${role.guild.id}`);
            if (userlimit == null) return db.set(`UDRoleDelete_${fetch.executor.id}_${role.guild.id}`, 1);
            db.add(`UDRoleDelete_${fetch.executor.id}_${role.guild.id}`, 1)
            if (userlimit > roledelete) {
                let member = role.guild.members.cache.get(fetch.executor.id);
                if (member) member.ban();
                db.delete(`UDRoleDelete_${fetch.executor.id}_${role.guild.id}`);
            }
        } else return undefined;
    } catch (err) {
        return
    }
};

module.exports.get = roleDeleteFunction;