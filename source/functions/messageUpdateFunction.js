async function messageUpdateFunction(oldMessage, newMessage, db) {
    try {
        let toggle = db.fetch(`AntiLinks_${newMessage.guild.id}`);
        let links = db.get(`AntiLinksArray_${newMessage.guild.id}.data`);
        if (links == null) links = ['https'];
        console.log(links)
        let lang = db.get(`Settings_${newMessage.guild.id}.lang`);
        if (toggle == "on") {
            let admins = db.get(`Settings_${newMessage.guild.id}.admins`);
            if (
                newMessage.content.includes(links[0]) ||
                newMessage.content.includes(links[1]) ||
                newMessage.content.includes(links[2]) ||
                newMessage.content.includes(links[3]) ||
                newMessage.content.includes(links[4]) ||
                newMessage.content.includes(links[5]) ||
                newMessage.content.includes(links[6]) ||
                newMessage.content.includes(links[7]) ||
                newMessage.content.includes(links[8]) ||
                newMessage.content.includes(links[9]) ||
                newMessage.content.includes(links[10]) ||
                newMessage.content.includes(links[11]) ||
                newMessage.content.includes(links[12]) ||
                newMessage.content.includes(links[13]) ||
                newMessage.content.includes(links[14]) ||
                newMessage.content.includes(links[15]) ||
                newMessage.content.includes(links[16]) ||
                newMessage.content.includes(links[17]) ||
                newMessage.content.includes(links[18]) ||
                newMessage.content.includes(links[19]) ||
                newMessage.content.includes(links[20]) ||
                newMessage.content.includes(links[21]) ||
                newMessage.content.includes(links[22]) ||
                newMessage.content.includes(links[23]) ||
                newMessage.content.includes(links[24]) ||
                newMessage.content.includes(links[25]) ||
                newMessage.content.includes(links[26]) ||
                newMessage.content.includes(links[27]) ||
                newMessage.content.includes(links[28]) ||
                newMessage.content.includes(links[29]) ||
                newMessage.content.includes(links[30]) ||
                newMessage.content.includes(links[31]) ||
                newMessage.content.includes(links[32]) ||
                newMessage.content.includes(links[33]) ||
                newMessage.content.includes(links[34]) ||
                newMessage.content.includes(links[35]) ||
                newMessage.content.includes(links[36]) ||
                newMessage.content.includes(links[37]) ||
                newMessage.content.includes(links[38]) ||
                newMessage.content.includes(links[39]) ||
                newMessage.content.includes(links[40]) ||
                newMessage.content.includes(links[41]) ||
                newMessage.content.includes(links[42]) ||
                newMessage.content.includes(links[43]) ||
                newMessage.content.includes(links[44]) ||
                newMessage.content.includes(links[45]) ||
                newMessage.content.includes(links[46]) ||
                newMessage.content.includes(links[47]) ||
                newMessage.content.includes(links[48]) ||
                newMessage.content.includes(links[49]) ||
                newMessage.content.includes(links[50])
            ) {
                if (admins.includes(newMessage.author.id)) return;
                let checker = db.get(`WarnsMute_${newMessage.guild.id}.data`);
                if (checker == null) db.set(`WarnsMute_${newMessage.guild.id}`, { data: 1 });
                else db.add(`WarnsMute_${newMessage.guild.id}.data`, 1);
                if (checker > 3) {
                    let role = newMessage.guild.roles.cache.find(r => r.name == "Muted");
                    if (!role) newMessage.roles.guild.create({
                        data: {
                            name: "Muted"
                        }
                    }).then(role => {
                        let member = newMessage.guild.member(newMessage.author);
                        member.roles.add(role)
                        newMessage.guild.channels.cache.forEach(channel => {
                            channel.overwritePermissions([{
                                    id: newMessage.guild.roles.everyone,
                                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                                },
                                {
                                    id: role.id,
                                    deny: ["SEND_MESSAGES"]
                                }
                            ]);
                        })
                    });
                    let member = newMessage.guild.member(newMessage.author);
                    member.roles.add(role);
                    setTimeout(async function() {
                        member.roles.remove(role);
                        db.delete(`WarnsMute_${newMessage.guild.id}`);
                    }, 1000 * 60 * 5);
                }
                if (lang == "en") return newMessage.reply({ content: `> ⚠️ **Anti-Links Porotecion Is Here <@!${newMessage.author.id}>!!**` }).then(() => newMessage.delete());
                if (lang == "ar") return newMessage.reply({ content: `> ⚠️ **حماية الروابط هنا <@!${newMessage.author.id}>!!**` }).then(() => newMessage.delete());
            }
        }

        let toggle2 = db.fetch(`AntiSwear_${oldMessage.guild.id}`);
        let swear = db.get(`AntiSwearArray_${oldMessage.guild.id}.data`);
        if (swear == null) swear = ['https'];
        if (toggle2 == "on") {
            let admins = db.get(`Settings_${oldMessage.guild.id}.admins`);
            if (
                oldMessage.content.includes(swear[0]) ||
                oldMessage.content.includes(swear[1]) ||
                oldMessage.content.includes(swear[2]) ||
                oldMessage.content.includes(swear[3]) ||
                oldMessage.content.includes(swear[4]) ||
                oldMessage.content.includes(swear[5]) ||
                oldMessage.content.includes(swear[6]) ||
                oldMessage.content.includes(swear[7]) ||
                oldMessage.content.includes(swear[8]) ||
                oldMessage.content.includes(swear[9]) ||
                oldMessage.content.includes(swear[10]) ||
                oldMessage.content.includes(swear[11]) ||
                oldMessage.content.includes(swear[12]) ||
                oldMessage.content.includes(swear[13]) ||
                oldMessage.content.includes(swear[14]) ||
                oldMessage.content.includes(swear[15]) ||
                oldMessage.content.includes(swear[16]) ||
                oldMessage.content.includes(swear[17]) ||
                oldMessage.content.includes(swear[18]) ||
                oldMessage.content.includes(swear[19]) ||
                oldMessage.content.includes(swear[20]) ||
                oldMessage.content.includes(swear[21]) ||
                oldMessage.content.includes(swear[22]) ||
                oldMessage.content.includes(swear[23]) ||
                oldMessage.content.includes(swear[24]) ||
                oldMessage.content.includes(swear[25]) ||
                oldMessage.content.includes(swear[26]) ||
                oldMessage.content.includes(swear[27]) ||
                oldMessage.content.includes(swear[28]) ||
                oldMessage.content.includes(swear[29]) ||
                oldMessage.content.includes(swear[30]) ||
                oldMessage.content.includes(swear[31]) ||
                oldMessage.content.includes(swear[32]) ||
                oldMessage.content.includes(swear[33]) ||
                oldMessage.content.includes(swear[34]) ||
                oldMessage.content.includes(swear[35]) ||
                oldMessage.content.includes(swear[36]) ||
                oldMessage.content.includes(swear[37]) ||
                oldMessage.content.includes(swear[38]) ||
                oldMessage.content.includes(swear[39]) ||
                oldMessage.content.includes(swear[40]) ||
                oldMessage.content.includes(swear[41]) ||
                oldMessage.content.includes(swear[42]) ||
                oldMessage.content.includes(swear[43]) ||
                oldMessage.content.includes(swear[44]) ||
                oldMessage.content.includes(swear[45]) ||
                oldMessage.content.includes(swear[46]) ||
                oldMessage.content.includes(swear[47]) ||
                oldMessage.content.includes(swear[48]) ||
                oldMessage.content.includes(swear[49]) ||
                oldMessage.content.includes(swear[50])
            ) {
                if (admins.includes(oldMessage.author.id)) return;
                let checker = db.get(`WarnsMute_${oldMessage.guild.id}.data`);
                if (checker == null) db.set(`WarnsMute_${oldMessage.guild.id}`, { data: 1 });
                else db.add(`WarnsMute_${oldMessage.guild.id}.data`, 1);
                if (checker > 3) {
                    let role = oldMessage.guild.roles.cache.find(r => r.name == "Muted");
                    if (!role) oldMessage.roles.guild.create({
                        data: {
                            name: "Muted"
                        }
                    }).then(role => {
                        let member = oldMessage.guild.member(oldMessage.author);
                        member.roles.add(role)
                        oldMessage.guild.channels.cache.forEach(channel => {
                            channel.overwritePermissions([{
                                    id: oldMessage.guild.roles.everyone,
                                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                                },
                                {
                                    id: role.id,
                                    deny: ["SEND_MESSAGES"]
                                }
                            ]);
                        })
                    });
                    let member = oldMessage.guild.member(oldMessage.author);
                    member.roles.add(role);
                    setTimeout(async function() {
                        member.roles.remove(role);
                        db.delete(`WarnsMute_${oldMessage.guild.id}`);
                    }, 1000 * 60 * 5);
                }
                if (lang == "en") return oldMessage.delete().then(() => oldMessage.reply({ content: `> ⚠️ **Anti-Swear Porotecion Is Here <@!${message.author.id}>!!**` }));
                if (lang == "ar") return oldMessage.delete().then(() => oldMessage.reply({ content: `> ⚠️ **حماية الشتم هنا <@!${message.author.id}>!!**` }));
            }
        }
    } catch (err) {
        console.log(err)
    }
}

module.exports.get = messageUpdateFunction;