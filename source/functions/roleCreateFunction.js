async function roleCreateFunction(role, db) {
    let rolecreate = db.fetch(`RoleCreate_${role.guild.id}`)
    let fetch = await role.guild.fetchAuditLogs({
        type: 'ROLE_CREATE'
    }).then(audit => audit.entries.first()).catch(err => { return })
    if (db.fetch(`RoleCreateToggle_${role.guild.id}`) === 'on') {
        let userlimit = db.fetch(`UDRoleCreate_${fetch.executor.id}_${role.guild.id}`);
        if (userlimit == null) return db.set(`UDRoleCreate_${fetch.executor.id}_${role.guild.id}`, 1);
        db.add(`UDRoleCreate_${fetch.executor.id}_${role.guild.id}`, 1)
        if (userlimit > rolecreate) {
            let member = role.guild.members.cache.get(fetch.executor.id);
            if (member) member.ban();
            db.delete(`UDRoleCreate_${fetch.executor.id}_${role.guild.id}`);
        }
    } else return undefined;
};

module.exports.get = roleCreateFunction;