const {
  Client,
  CommandInteraction,
  MessageEmbed,
  MessageButton,
  MessageActionRow,
} = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "maxprotect",
  description: "Enable All Bot Protection!.",
  type: "CHAT_INPUT",

  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */

  run: async (client, interaction, args) => {
    try {
      const embed = new MessageEmbed()
        .setTitle(`Help Commands`)
        .setColor(0x2f3136)
        .setAuthor(interaction.guild.name, interaction.guild.iconURL())
        .setDescription(
          `**[ZDRA Protection](https://github.com/DevelopersSupportAR/ZDRA-Protection.git), Protect your discord server from hackers and bad staff!!.**\n\n\nPress "❌" To Stop The Bot Protection\nPress "🔓" To Use All Bot Protection\nPress "🔒" To Allow NIRO Protection (your staff will can't use an permission thay have)\n`
        );
      let btn = new MessageButton()
        .setCustomId("x")
        .setStyle("DANGER")
        .setLabel("❌ No Protection");
      let btn2 = new MessageButton()
        .setCustomId("full")
        .setStyle("DANGER")
        .setLabel("🔓 Full Protection");
      let btn3 = new MessageButton()
        .setCustomId("niro")
        .setStyle("DANGER")
        .setLabel("🔒 Niro Protection");
      let row = new MessageActionRow().addComponents(btn, btn2, btn3);
      interaction
        .reply({
          embeds: [embed],
          components: [row],
          ephemeral: true,
        })
        .catch(() => {});
      const filter = (i) => i.user.id === interaction.user.id;
      const collector = interaction.channel.createMessageComponentCollector({
        filter,
        time: 1000 * 60 * 3,
      });

      collector.on("collect", (i) => {
        i.deferReply();
        if (i.customId == "x") {
          db.delete(`AntiLinksArray_${interaction.guild.id}`);
          db.delete(`AntiSwearArray_${interaction.guild.id}`);
          db.delete(`AntiLinks_${interaction.guild.id}`);
          db.delete(`AntiSwear_${interaction.guild.id}`);
          db.delete(`AntiBots_${interaction.guild.id}`);
          db.delete(`AntiSpam_${interaction.guild.id}`);
          db.delete(`AntiTokens_${interaction.guild.id}`);
          db.delete(`AntiTokensTime_${interaction.guild.id}`);
          db.delete(`RoleCreateToggle_${interaction.guild.id}`);
          db.delete(`RoleCreate_${interaction.guild.id}`);
          db.delete(`RoleDeleteToggle_${interaction.guild.id}`);
          db.delete(`RoleDelete_${interaction.guild.id}`);
          db.delete(`ChannelCreateToggle_${interaction.guild.id}`);
          db.delete(`ChannelCreate_${interaction.guild.id}`);
          db.delete(`ChannelDeleteToggle_${interaction.guild.id}`);
          db.delete(`ChannelDelete_${interaction.guild.id}`);
          db.delete(`MembersBanToggle_${interaction.guild.id}`);
          db.delete(`MemebersBan_${interaction.guild.id}`);
          interaction.editReply({
            content: "> ❌ **All Bot Protection Settings Is Off**",
            embeds: [],
            components: [],
            ephemeral: true,
          });
        } else if (i.customId == "full") {
          db.set(`AntiLinksArray_${interaction.guild.id}`, {
            data: ["https", "http", "www", "discord.gg"],
          });
          db.set(`AntiSwearArray_${interaction.guild.id}`, {
            data: ["fuck", "pussy", "نيك", "كس"],
          });
          db.set(`AntiLinks_${interaction.guild.id}`, "on");
          db.set(`AntiSwear_${interaction.guild.id}`, "on");
          db.set(`AntiBots_${interaction.guild.id}`, "on");
          db.set(`AntiSpam_${interaction.guild.id}`, "on");
          db.set(`AntiTokens_${interaction.guild.id}`, "on");
          db.set(`AntiTokensTime_${interaction.guild.id}`, 120);
          db.set(`RoleCreateToggle_${interaction.guild.id}`, "on");
          db.set(`RoleCreate_${interaction.guild.id}`, "1");
          db.set(`RoleDeleteToggle_${interaction.guild.id}`, "on");
          db.set(`RoleDelete_${interaction.guild.id}`, "1");
          db.set(`ChannelCreateToggle_${interaction.guild.id}`, "on");
          db.set(`ChannelCreate_${interaction.guild.id}`, "1");
          db.set(`ChannelDeleteToggle_${interaction.guild.id}`, "on");
          db.set(`ChannelDelete_${interaction.guild.id}`, "1");
          db.set(`MembersBanToggle_${interaction.guild.id}`, "on");
          db.set(`MemebersBan_${interaction.guild.id}`, "1");
          interaction
            .editReply({
              content: "> 🔓 **All Bot Protection Settings Is On**",
              embeds: [],
              components: [],
              ephemeral: true,
            })
            .catch(() => {});
        } else if (i.customId == "niro") {
          db.set(`AntiLinksArray_${interaction.guild.id}`, {
            data: ["https", "http", "www", "discord.gg"],
          });
          db.set(`AntiSwearArray_${interaction.guild.id}`, {
            data: ["fuck", "pussy", "نيك", "كس"],
          });
          db.set(`AntiLinks_${interaction.guild.id}`, "on");
          db.set(`AntiSwear_${interaction.guild.id}`, "on");
          db.set(`AntiBots_${interaction.guild.id}`, "on");
          db.set(`AntiSpam_${interaction.guild.id}`, "on");
          db.set(`AntiTokens_${interaction.guild.id}`, "on");
          db.set(`AntiTokensTime_${interaction.guild.id}`, 120);
          db.set(`RoleCreateToggle_${interaction.guild.id}`, "on");
          db.set(`RoleCreate_${interaction.guild.id}`, "1");
          db.set(`RoleDeleteToggle_${interaction.guild.id}`, "on");
          db.set(`RoleDelete_${interaction.guild.id}`, "1");
          db.set(`ChannelCreateToggle_${interaction.guild.id}`, "on");
          db.set(`ChannelCreate_${interaction.guild.id}`, "1");
          db.set(`ChannelDeleteToggle_${interaction.guild.id}`, "on");
          db.set(`ChannelDelete_${interaction.guild.id}`, "1");
          db.set(`MembersBanToggle_${interaction.guild.id}`, "on");
          db.set(`MemebersBan_${interaction.guild.id}`, "1");
          // niro
          db.set(`NIRO_Protection_${interaction.guild.id}`, "on");
          interaction
            .editReply({
              content: "> 🔒 **NIRO Protection is active**",
              embeds: [],
              components: [],
              ephemeral: true,
            })
            .catch(() => {});
        }
      });
    } catch {
      console.log("");
    }
  },
};
