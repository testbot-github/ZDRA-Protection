async function channelCreateFunction(channel, db) {
    let channelcreate = db.fetch(`ChannelCreate_${channel.guild.id}`)
    let fetch = await channel.guild.fetchAuditLogs({
        type: 'CHANNEL_CREATE'
    }).then(audit => audit.entries.first())
    if (db.fetch(`ChannelCreateToggle_${channel.guild.id}`) === 'on') {
        let userlimit = db.fetch(`UDChannelCreate_${fetch.executor.id}_${channel.guild.id}`);
        if (userlimit == null) return db.set(`UDChannelCreate_${fetch.executor.id}_${channel.guild.id}`, 1);
        db.add(`UDChannelCreate_${fetch.executor.id}_${channel.guild.id}`, 1)
        if (userlimit > channelcreate) {
            let member = channel.guild.members.cache.get(fetch.executor.id);
            if (member) member.ban();
            db.delete(`UDChannelCreate_${fetch.executor.id}_${channel.guild.id}`);
        }
    } else return undefined;
};

module.exports.get = channelCreateFunction;