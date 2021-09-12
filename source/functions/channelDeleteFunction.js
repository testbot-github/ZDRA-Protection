async function channelDeleteFunction(channel, db) {
    let channeldelete = db.fetch(`ChannelDelete_${channel.guild.id}`)
    let fetch = await channel.guild.fetchAuditLogs({
        type: 'CHANNEL_DELETE'
    }).then(audit => audit.entries.first())
    if (db.fetch(`ChannelDeleteToggle_${channel.guild.id}`) === 'on') {
        let userlimit = db.fetch(`UDChannelDelete_${fetch.executor.id}_${channel.guild.id}`);
        if (userlimit == null) return db.set(`UDChannelDelete_${fetch.executor.id}_${channel.guild.id}`, 1);
        db.add(`UDChannelDelete_${fetch.executor.id}_${channel.guild.id}`, 1)
        if (userlimit > channeldelete) {
            let member = channel.guild.members.cache.get(fetch.executor.id);
            if (member) member.ban();
            db.delete(`UDChannelDelete_${fetch.executor.id}_${channel.guild.id}`)
        }
    } else return undefined;
};

module.exports.get = channelDeleteFunction;