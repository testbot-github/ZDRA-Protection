const { Client, CommandInteraction } = require("discord.js");
const db = require("quick.db");
const ms = require("ms");

module.exports = {
  name: "mute",
  description: "Text Mute Members!.",
  type: "CHAT_INPUT",
  options: [
    {
      name: "user",
      description: "The User You Wont To Mute!.",
      type: "USER",
      required: true,
    },
    {
      name: "reason",
      description: "The Reason Why You Mute Him!.",
      type: "STRING",
      required: false,
    },
    {
      name: "time",
      description: "How Much He Will Be Muted!.",
      type: "STRING",
      required: false,
    },
  ],
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */

  run: async (client, interaction, args) => {
    let settings = db.fetch(`Settings_${interaction.guild.id}`);
    let lang = settings.lang;
    let member = interaction.guild.members.cache.get(
      interaction.options.getUser("user").id
    );
    let muterole = interaction.guild.roles.cache.find(
      (role) => role.name === "Muted"
    );
    let time = interaction.options.getString("time") || "24h";
    let reason = interaction.options.getString("reason") || "no reason";
    if (!muterole) {
      try {
        interaction.guild.roles
          .create({
            name: "Muted",
            permissions: [],
          })
          .then(async (role) => {
            interaction.guild.channels.cache.forEach((channel) => {
              channel.permissionOverwrites.edit(role, {
                'SEND_MESSAGES': false,
                'ATTACH_FILES': false,
               })
            });
          });
      } catch (err) {
        console.log(err);
      }
      if (lang == "ar")
        return interaction.reply({
          content: "يرجى اعادى المحاوله",
        });
      if (lang == "en")
        return interaction.reply({
          content: "please try agine",
        });
    }
    if (lang == "ar") {
      if (
        time.endsWith("0") ||
        time.endsWith("1") ||
        time.endsWith("2") ||
        time.endsWith("3") ||
        time.endsWith("4") ||
        time.endsWith("5") ||
        time.endsWith("6") ||
        time.endsWith("7") ||
        time.endsWith("8") ||
        time.endsWith("9")
      )
        return interaction.reply({
          content: "> :x: **أدخال الوقت خاطأ**",
          ephemeral: true,
        });
      if (member.roles.cache.find((role) => role.id == muterole.id))
        return interaction.reply({
          content: `> :x: **تم اسكات هذا الشخص مسبقا**`,
          ephemeral: true,
        });
      member.roles.add(muterole).then(() => {
        interaction.reply({
          content: `> ✅ **تم اسكات <@!${member.user.id}> لمدة \`${time}\` بسبب \`${reason}\`**`,
          ephemeral: true,
        });
        setTimeout(() => {
          member.roles.remove(muterole);
        }, ms(time));
      });
    } else if (lang == "en") {
      if (
        time.endsWith("0") ||
        time.endsWith("1") ||
        time.endsWith("2") ||
        time.endsWith("3") ||
        time.endsWith("4") ||
        time.endsWith("5") ||
        time.endsWith("6") ||
        time.endsWith("7") ||
        time.endsWith("8") ||
        time.endsWith("9")
      )
        return interaction.reply({
          content: "> :x: **Worang Time Input**",
          ephemeral: true,
        });
      if (member.roles.cache.find((role) => role.id == muterole?.id || ""))
        return interaction.reply({
          content: `> :x: **This One Is Already Muted**`,
          ephemeral: true,
        });
      member.roles.add(muterole).then(() => {
        interaction.reply({
          content: `> ✅ **<@!${member.user.id}> Has Muted For \`${time}\` Becouse \`${reason}\`**`,
          ephemeral: true,
        });
        setTimeout(() => {
          member.roles.remove(muterole);
        }, ms(time));
      });
    }
  },
};
