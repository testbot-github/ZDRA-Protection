const {
  Client,
  Message,
  Guild,
  MessageButton,
  MessageActionRow,
} = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],

  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {Guild} guild
   */

  run: async (
    client,
    message,
    args,
    prefix,
    lang,
    admins,
    db,
    MessageEmbed
  ) => {
    try {
      const embed = new MessageEmbed()
        .setTitle(`Help Commands`)
        .setColor(0x2f3136)
        .setAuthor(message.guild.name, message.guild.iconURL())
        .setDescription(
          `**[ZDRA Protection](https://github.com/DevelopersSupportAR/ZDRA-Protection.git), Protect your discord server from hackers and bad staff!!.**\n\n\nPress "🔒" To See Protection Commands\nPress "🛠️" To See Moderation Commands\nPress "🌍" To See Other Commands\nPress "👨‍💻" To See Bot Developers`
        );
      let btn = new MessageButton()
        .setCustomId("pro")
        .setStyle("DANGER")
        .setLabel("🔒 Protection");
      let btn2 = new MessageButton()
        .setCustomId("adm")
        .setStyle("DANGER")
        .setLabel("🛠️ Moderation");
      let btn3 = new MessageButton()
        .setCustomId("gen")
        .setStyle("DANGER")
        .setLabel("🌍 Other");
      let btn4 = new MessageButton()
        .setCustomId("devs")
        .setStyle("SUCCESS")
        .setLabel("👨‍💻 Bot Developers");
      let row = new MessageActionRow().addComponents(btn, btn2, btn3, btn4);
      var m = await message.reply({
        embeds: [embed],
        components: [row],
        ephemeral: true,
      });

      var iFilter = (i) => i.user.id === message.author.id;
      var collector = m.createMessageComponentCollector({
        filter: iFilter,
        time: 3600000,
      });
      collector.on("collect", async (i) => {
        i.deferReply();
        if (i.customId == "pro") {
          const embed2 = new MessageEmbed()
            .setTitle(`Help Commands`)
            .setColor(0x2f3136)
            .setAuthor(message.guild.name, message.guild.iconURL())
            .setDescription(
              `**[ZDRA Protection](https://github.com/DevelopersSupportAR/ZDRA-Protection.git), Protect your discord server from hackers and bad staff!!.**\n\n\nPress "🔒" To See Protection Commands\nPress "🛠️" To See Moderation Commands\nPress "🌍" To See Other Commands\nPress "👨‍💻" To See Bot Developers\n`
            )
            .addField(`${prefix}anti-links `, `Links Protect`, true)
            .addField(`${prefix}add-links `, `Add links`, true)
            .addField(`${prefix}anti-swear `, `Swear Protect`, true)
            .addField(`${prefix}add-swear `, `Add Swear`, true)
            .addField(`${prefix}anti-spam `, `Spam Protect on/off`, true)
            .addField(`${prefix}anti-bots `, `Bot Protect on/off`, true)
            .addField(`${prefix}anti-tokens `, `Token Protect on/off`, true)
            .addField(`${prefix}time-tokens `, `Set Tokens Age`, true)
            .addField(
              `${prefix}set-limit RoleCreate <number>`,
              `Set Limite Role Create`,
              true
            )
            .addField(
              `${prefix}set-limit RoleDelete <number>`,
              `Set Limite Role Delete`,
              true
            )
            .addField(
              `${prefix}set-limit ChannelCreate <number>`,
              `Set Limite Channel Create`,
              true
            )
            .addField(
              `${prefix}set-limit ChannelDelete <number>`,
              `Set Limite Channel Delete`,
              true
            )
            .addField(
              `${prefix}set-limit MembersBan <number>`,
              `Set Limite Members Ban`,
              true
            )
            .addField(
              `${prefix}set-limit MemebrsKick <number>`,
              `Set Limite Members Kick`,
              true
            )
            .addField(
              `${prefix}toggle-limit RoleCreate <on/off>`,
              `Set Limite Role Create`,
              true
            )
            .addField(
              `${prefix}toggle-limit RoleDelete <on/off>`,
              `Set Limite Role Delete`,
              true
            )
            .addField(
              `${prefix}toggle-limit ChannelCreate <on/off>`,
              `Set Limite Channel Create`,
              true
            )
            .addField(
              `${prefix}toggle-limit ChannelDelete <on/off>`,
              `Set Limite Channel Delete`,
              true
            )
            .addField(
              `${prefix}toggle-limit MembersBan <on/off>`,
              `Set Limite Members Ban`,
              true
            )
            .addField(
              `${prefix}toggle-limit MemebrsKick <on/off> `,
              `Set Limite Members Kick`,
              true
            )
            .addField(`${prefix}config `, `Shows Bot Config`, true)
            .addField(`${prefix}maxprotect `, `Allow The Max Protect`, true);
          let btn = new MessageButton()
            .setCustomId("pro")
            .setStyle("DANGER")
            .setLabel("🔒 Protection")
            .setDisabled();
          let btn2 = new MessageButton()
            .setCustomId("adm")
            .setStyle("DANGER")
            .setLabel("🛠️ Moderation");
          let btn3 = new MessageButton()
            .setCustomId("gen")
            .setStyle("DANGER")
            .setLabel("🌍 Other");
          let btn4 = new MessageButton()
            .setCustomId("devs")
            .setStyle("SUCCESS")
            .setLabel("👨‍💻 Bot Developers");
          let row2 = new MessageActionRow().addComponents(
            btn,
            btn2,
            btn3,
            btn4
          );
          await m.edit({
            embeds: [embed2],
            components: [row2],
            ephemeral: true,
          });
        } else if (i.customId == "adm") {
          const embed2 = new MessageEmbed()
            .setTitle(`Help Commands`)
            .setColor(0x2f3136)
            .setAuthor(message.guild.name, message.guild.iconURL())
            .setDescription(
              `**[ZDRA Protection](https://github.com/DevelopersSupportAR/ZDRA-Protection.git), Protect your discord server from hackers and bad staff!!.**\n\n\nPress "🔒" To See Protection Commands\nPress "🛠️" To See Moderation Commands\nPress "🌍" To See Other Commands\nPress "👨‍💻" To See Bot Developers\n`
            )
            .addField(`${prefix}auto-role `, `Links Protect`, true)
            .addField(`${prefix}ban `, `Ban Members`, true)
            .addField(`${prefix}clear `, `Clear Messages`, true)
            .addField(
              `${prefix}files-only `,
              `Make The Channel To Send Files Only`,
              true
            )
            .addField(`${prefix}hide `, `Hide The Channel From View`, true)
            .addField(`${prefix}kick `, `Kick Members`, true)
            .addField(`${prefix}lock `, `Lock The Channels`, true)
            .addField(`${prefix}mute `, `Mute Members`, true)
            .addField(`${prefix}role `, `Add Role To Members`, true)
            .addField(
              `${prefix}show `,
              `Show Channel To Allow Any One To See It`,
              true
            )
            .addField(`${prefix}slow-mode `, `Set Slow Mode Level`, true)
            .addField(`${prefix}unlock `, `Unlock The Channels`, true)
            .addField(`${prefix}unmute `, `Unmute Members`, true)
            .addField(`${prefix}warn `, `Warn Members`, true)
            .addField(
              `${prefix}setting lang <en/ar>`,
              `To Set The Bot Lang`,
              true
            )
            .addField(
              `${prefix}setting prefix <prefix>`,
              `To Set The Bot Prefix`,
              true
            )
            .addField(
              `${prefix}setting admins <id>`,
              `To Add An Admin To The Allowed Admins`,
              true
            );
          let btn = new MessageButton()
            .setCustomId("pro")
            .setStyle("DANGER")
            .setLabel("🔒 Protection");
          let btn2 = new MessageButton()
            .setCustomId("adm")
            .setStyle("DANGER")
            .setLabel("🛠️ Moderation")
            .setDisabled();
          let btn3 = new MessageButton()
            .setCustomId("gen")
            .setStyle("DANGER")
            .setLabel("🌍 Other");
          let btn4 = new MessageButton()
            .setCustomId("devs")
            .setStyle("SUCCESS")
            .setLabel("👨‍💻 Bot Developers");
          let row2 = new MessageActionRow().addComponents(
            btn,
            btn2,
            btn3,
            btn4
          );
          await m.edit({
            embeds: [embed2],
            components: [row2],
            ephemeral: true,
          });
        } else if (i.customId == "gen") {
          const embed2 = new MessageEmbed()
            .setTitle(`Help Commands`)
            .setColor(0x2f3136)
            .setAuthor(message.guild.name, message.guild.iconURL())
            .setDescription(
              `**[ZDRA Protection](https://github.com/DevelopersSupportAR/ZDRA-Protection.git), Protect your discord server from hackers and bad staff!!.**\n\n\nPress "🔒" To See Protection Commands\nPress "🛠️" To See Moderation Commands\nPress "🌍" To See Other Commands\nPress "👨‍💻" To See Bot Developers\n`
            )
            .addField(`${prefix}avatar `, `User Avatar`, true)
            .addField(`${prefix}server `, `Server Info`, true)
            .addField(`${prefix}user `, `User Info`, true)
            .addField(`${prefix}info `, `Bot Info`, true);
          let btn = new MessageButton()
            .setCustomId("pro")
            .setStyle("DANGER")
            .setLabel("🔒 Protection");
          let btn2 = new MessageButton()
            .setCustomId("adm")
            .setStyle("DANGER")
            .setLabel("🛠️ Moderation");
          let btn3 = new MessageButton()
            .setCustomId("gen")
            .setStyle("DANGER")
            .setLabel("🌍 Other")
            .setDisabled();
          let btn4 = new MessageButton()
            .setCustomId("devs")
            .setStyle("SUCCESS")
            .setLabel("👨‍💻 Bot Developers");
          let row2 = new MessageActionRow().addComponents(
            btn,
            btn2,
            btn3,
            btn4
          );
          await m.edit({
            embeds: [embed2],
            components: [row2],
            ephemeral: true,
          });
        } else if (i.customId == "devs") {
          const embed2 = new MessageEmbed()
            .setTitle(`Help Commands`)
            .setColor(0x2f3136)
            .setAuthor(message.guild.name, message.guild.iconURL())
            .setDescription(
              `**[ZDRA Protection](https://github.com/DevelopersSupportAR/ZDRA-Protection.git), Protect your discord server from hackers and bad staff!!.**\n\n\nPress "🔒" To See Protection Commands\nPress "🛠️" To See Moderation Commands\nPress "🌍" To See Other Commands\nPress "👨‍💻" To See Bot Developers\n`
            )
            .addField(
              `NIRO: `,
              `- Made:
                    
                    > Handler 
                    > messages
                    
                    - Info:
                    
                    Discord Name: ニロ, ᴹᵃᴿˢ#3121
                    Discord Server: https://discord.gg/developer-support`,
              false
            )
            .addField(
              `Cyber: `,
              `- Made:
                    
                    > Events
                    > Normal Commands
                    > Error Handler
                    
                    - Info:
                    
                    Discord Name: 【H2】Cyber#1111
                    Discord Server: https://discord.gg/tFSACgnS8Q`,
              true
            );
          let btn = new MessageButton()
            .setCustomId("pro")
            .setStyle("DANGER")
            .setLabel("🔒 Protection");
          let btn2 = new MessageButton()
            .setCustomId("adm")
            .setStyle("DANGER")
            .setLabel("🛠️ Moderation");
          let btn3 = new MessageButton()
            .setCustomId("gen")
            .setStyle("DANGER")
            .setLabel("🌍 Other");
          let btn4 = new MessageButton()
            .setCustomId("devs")
            .setStyle("SUCCESS")
            .setLabel("👨‍💻 Bot Developers")
            .setDisabled();
          let row2 = new MessageActionRow().addComponents(
            btn,
            btn2,
            btn3,
            btn4
          );
          await m.edit({
            embeds: [embed2],
            components: [row2],
            ephemeral: true,
          });
        }
      });
      collector.on("end", (i) =>
        m
          .edit({
            content: "> :x: **Collector Time Out**",
            embeds: [],
            components: [],
            ephemeral: true,
          })
          .catch((err) => {
            return;
          })
      );
    } catch (er) {
      console.log("");
    }
  },
};
