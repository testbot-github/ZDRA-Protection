const { Message, Client } = require("discord.js");

/**
 *
 * @param {Client} client
 * @param {Message} message
 */

async function messageFunction(message, db) {
  try {
    let toggle = db.fetch(`AntiLinks_${message.guild.id}`);
    let links = db.get(`AntiLinksArray_${message.guild.id}.data`);
    if (links == null) links = ["https"];
    let lang = db.get(`Settings_${message.guild.id}.lang`);
    if (toggle == "on") {
      if (message.author.bot) return;
      let admins = db.get(`Settings_${message.guild.id}.admins`);
      if (
        message.content.includes(links[0]) ||
        message.content.includes(links[1]) ||
        message.content.includes(links[2]) ||
        message.content.includes(links[3]) ||
        message.content.includes(links[4]) ||
        message.content.includes(links[5]) ||
        message.content.includes(links[6]) ||
        message.content.includes(links[7]) ||
        message.content.includes(links[8]) ||
        message.content.includes(links[9]) ||
        message.content.includes(links[10]) ||
        message.content.includes(links[11]) ||
        message.content.includes(links[12]) ||
        message.content.includes(links[13]) ||
        message.content.includes(links[14]) ||
        message.content.includes(links[15]) ||
        message.content.includes(links[16]) ||
        message.content.includes(links[17]) ||
        message.content.includes(links[18]) ||
        message.content.includes(links[19]) ||
        message.content.includes(links[20]) ||
        message.content.includes(links[21]) ||
        message.content.includes(links[22]) ||
        message.content.includes(links[23]) ||
        message.content.includes(links[24]) ||
        message.content.includes(links[25]) ||
        message.content.includes(links[26]) ||
        message.content.includes(links[27]) ||
        message.content.includes(links[28]) ||
        message.content.includes(links[29]) ||
        message.content.includes(links[30]) ||
        message.content.includes(links[31]) ||
        message.content.includes(links[32]) ||
        message.content.includes(links[33]) ||
        message.content.includes(links[34]) ||
        message.content.includes(links[35]) ||
        message.content.includes(links[36]) ||
        message.content.includes(links[37]) ||
        message.content.includes(links[38]) ||
        message.content.includes(links[39]) ||
        message.content.includes(links[40]) ||
        message.content.includes(links[41]) ||
        message.content.includes(links[42]) ||
        message.content.includes(links[43]) ||
        message.content.includes(links[44]) ||
        message.content.includes(links[45]) ||
        message.content.includes(links[46]) ||
        message.content.includes(links[47]) ||
        message.content.includes(links[48]) ||
        message.content.includes(links[49]) ||
        message.content.includes(links[50])
      ) {
        if (admins.includes(message.author.id)) return;
        let checker = db.get(`WarnsMute_${message.guild.id}.data`);
        if (checker == null)
          db.set(`WarnsMute_${message.guild.id}`, { data: 1 });
        else db.add(`WarnsMute_${message.guild.id}.data`, 1);
        if (checker > 3) {
          let role = message.guild.roles.cache.find((r) => r.name == "Muted");
          if (!role)
            message.roles.guild
              .create({
                data: {
                  name: "Muted",
                },
              })
              .then((role) => {
                let member = message.guild.member(message.author);
                member.roles.add(role);
                message.guild.channels.cache.forEach((channel) => {
                  channel.overwritePermissions([
                    {
                      id: message.guild.roles.everyone,
                      allow: ["SEND_MESSAGES", "VIEW_CHANNEL"],
                    },
                    {
                      id: role.id,
                      deny: ["SEND_MESSAGES"],
                    },
                  ]);
                });
              });
          let member = message.guild.member(message.author);
          member.roles.add(role);
          setTimeout(async function () {
            member.roles.remove(role);
            db.delete(`WarnsMute_${message.guild.id}`);
          }, 1000 * 60 * 5);
        }
        if (lang == "en")
          return message
            .delete()
            .then(() =>
              message.channel.send({
                content: `> ⚠️ **Anti-Links Porotecion Is Here <@!${message.author.id}>!!**`,
              })
            );
        if (lang == "ar")
          return message
            .delete()
            .then(() =>
              message.channel.send({
                content: `> ⚠️ **حماية الروابط هنا <@!${message.author.id}>!!**`,
              })
            );
      }
    }
    let toggle2 = db.fetch(`AntiSwear_${message.guild.id}`);
    let swear = db.get(`AntiSwearArray_${message.guild.id}.data`);
    if (swear == null) swear = ["https"];
    if (toggle2 == "on") {
      if (message.author.bot) return;
      let admins = db.get(`Settings_${message.guild.id}.admins`);
      if (
        message.content.includes(swear[0]) ||
        message.content.includes(swear[1]) ||
        message.content.includes(swear[2]) ||
        message.content.includes(swear[3]) ||
        message.content.includes(swear[4]) ||
        message.content.includes(swear[5]) ||
        message.content.includes(swear[6]) ||
        message.content.includes(swear[7]) ||
        message.content.includes(swear[8]) ||
        message.content.includes(swear[9]) ||
        message.content.includes(swear[10]) ||
        message.content.includes(swear[11]) ||
        message.content.includes(swear[12]) ||
        message.content.includes(swear[13]) ||
        message.content.includes(swear[14]) ||
        message.content.includes(swear[15]) ||
        message.content.includes(swear[16]) ||
        message.content.includes(swear[17]) ||
        message.content.includes(swear[18]) ||
        message.content.includes(swear[19]) ||
        message.content.includes(swear[20]) ||
        message.content.includes(swear[21]) ||
        message.content.includes(swear[22]) ||
        message.content.includes(swear[23]) ||
        message.content.includes(swear[24]) ||
        message.content.includes(swear[25]) ||
        message.content.includes(swear[26]) ||
        message.content.includes(swear[27]) ||
        message.content.includes(swear[28]) ||
        message.content.includes(swear[29]) ||
        message.content.includes(swear[30]) ||
        message.content.includes(swear[31]) ||
        message.content.includes(swear[32]) ||
        message.content.includes(swear[33]) ||
        message.content.includes(swear[34]) ||
        message.content.includes(swear[35]) ||
        message.content.includes(swear[36]) ||
        message.content.includes(swear[37]) ||
        message.content.includes(swear[38]) ||
        message.content.includes(swear[39]) ||
        message.content.includes(swear[40]) ||
        message.content.includes(swear[41]) ||
        message.content.includes(swear[42]) ||
        message.content.includes(swear[43]) ||
        message.content.includes(swear[44]) ||
        message.content.includes(swear[45]) ||
        message.content.includes(swear[46]) ||
        message.content.includes(swear[47]) ||
        message.content.includes(swear[48]) ||
        message.content.includes(swear[49]) ||
        message.content.includes(swear[50])
      ) {
        if (admins.includes(message.author.id)) return;
        let checker = db.get(`WarnsMuteS_${message.guild.id}.data`);
        if (checker == null)
          db.set(`WarnsMute_${message.guild.id}`, { data: 1 });
        else db.add(`WarnsMuteS_${message.guild.id}.data`, 1);
        if (checker > 3) {
          let role = message.guild.roles.cache.find((r) => r.name == "Muted");
          if (!role)
            message.roles.guild
              .create({
                data: {
                  name: "Muted",
                },
              })
              .then((role) => {
                let member = message.guild.member(message.author);
                member.roles.add(role);
                message.guild.channels.cache.forEach((channel) => {
                  channel.overwritePermissions([
                    {
                      id: message.guild.roles.everyone,
                      allow: ["SEND_MESSAGES", "VIEW_CHANNEL"],
                    },
                    {
                      id: role.id,
                      deny: ["SEND_MESSAGES"],
                    },
                  ]);
                });
              });
          let member = message.guild.member(message.author);
          member.roles.add(role);
          setTimeout(async function () {
            member.roles.remove(role);
            db.delete(`WarnsMute_${message.guild.id}`);
          }, 1000 * 60 * 5);
        }
        if (lang == "en")
          return message
            .delete()
            .then(() =>
              message.channel.send({
                content: `> ⚠️ **Anti-Swear Porotecion Is Here <@!${message.author.id}>!!**`,
              })
            );
        if (lang == "ar")
          return message
            .delete()
            .then(() =>
              message.channel.send({
                content: `> ⚠️ **حماية الشتم هنا <@!${message.author.id}>!!**`,
              })
            );
      }
    }
    if (message.attachments) {
      let channellll = db.fetch(`FilesOnly_${message.guild.id}`);
      if (channellll == null) return;
      if (message.channel.id == channellll.id) {
        if (message.attachments.size == 0) message.delete();
      }
    }
  } catch (err) {
    return;
  }
}

module.exports.get = messageFunction;
