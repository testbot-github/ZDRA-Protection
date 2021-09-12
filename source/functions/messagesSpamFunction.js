const usersMap = new Map();
const LIMIT = 5;
const TIME = 1000 * 60 * 5;
const DIFF = 3000;

async function messagesSpamFunction(message, db) {
    try {
        let lang = db.get(`Settings_${message.guild.id}.lang`);
        let admins = db.get(`Settings_${message.guild.id}.admins`);
        if (admins.includes(message.author.id)) return;
        if (message.author.bot) return;
        let toggle3 = db.fetch(`AntiSpam_${message.guild.id}`);
        if (toggle3 == "on") {
            if (usersMap.has(message.author.id)) {
                const userData = usersMap.get(message.author.id);
                const { lastMessage, timer } = userData;
                const difference = message.createdTimestamp - lastMessage.createdTimestamp;
                let msgCount = userData.msgCount;

                if (difference > DIFF) {
                    clearTimeout(timer);
                    console.log('Cleared Timeout');
                    userData.msgCount = 1;
                    userData.lastMessage = message;
                    userData.timer = setTimeout(() => {
                        usersMap.delete(message.author.id);
                        console.log('Removed from map.')
                    }, TIME);
                    usersMap.set(message.author.id, userData)
                } else {
                    ++msgCount;
                    if (parseInt(msgCount) === LIMIT) {
                        let muterole = message.guild.roles.cache.find(role => role.name === 'Muted');
                        if (!muterole) {
                            try {
                                message.guild.roles.create({
                                    data: {
                                        name: "Muted",
                                    }
                                }).then(async(role) => {
                                    await message.guild.channels.cache.forEach(channel => {
                                        channel.overwritePermissions([{
                                            id: role.id,
                                            deny: ["SEND_MESSAGES"]
                                        }]);
                                    })
                                })
                            } catch (e) {
                                console.log(e)
                            }
                        }
                        message.member.roles.add(muterole);
                        let messageS;
                        if (lang == "en") messageS = `<@!${message.author.id}>` + ', Has Been Muted For Spaming!.';
                        if (lang == "ar") messageS = `<@!${message.author.id}>` + ', تم اسكاتبه بسبب السبام!.';
                        message.channel.send({ content: messageS, ephemeral: true })
                        setTimeout(() => {
                            message.member.roles.remove(muterole);
                        }, TIME);
                    } else {
                        userData.msgCount = msgCount;
                        usersMap.set(message.author.id, userData);
                    }
                }
            } else {
                let fn = setTimeout(() => {
                    usersMap.delete(message.author.id);
                }, TIME);
                usersMap.set(message.author.id, {
                    msgCount: 1,
                    lastMessage: message,
                    timer: fn
                });
            }
        }
    } catch (err) {
        return;
    }
}

module.exports.get = messagesSpamFunction;