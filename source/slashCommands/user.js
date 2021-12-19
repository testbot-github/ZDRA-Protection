const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const moment = require("moment");

module.exports = {
  name: "user",
  description: "User Info!.",
  type: "CHAT_INPUT",
  options: [
    {
      name: "user",
      description: "The User!.",
      type: "USER",
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
    let user = interaction.options.getUser("user") || interaction.user;
    moment.locale("ar-TN");
    const flags = user.flags || (await user.fetchFlags());
    let flagsAraay = [];
    if (flags.toArray().includes("DISCORD_PARTNER"))
      flagsAraay.push("<:6714discordpartner:885687944747319316>");
    if (flags.toArray().includes("HYPESQUAD_EVENTS"))
      flagsAraay.push("<:5267badlydrawnhypesquadbadge:885687944730509392>");
    if (flags.toArray().includes("HOUSE_BRILLIANCE"))
      flagsAraay.push("<:4685_hypesquad_briliance:885687944575324192>");
    if (flags.toArray().includes("HOUSE_BRAVERY"))
      flagsAraay.push("<:1247discordbravery:885687944759898133>");
    if (flags.toArray().includes("HOUSE_BALANCE"))
      flagsAraay.push("<:5946discordbalance:885687945032515614>");
    if (flags.toArray().includes("BUGHUNTER_LEVEL_2"))
      flagsAraay.push("<:7904discordbughunterlv2:885687944772485151>");
    if (flags.toArray().includes("BUGHUNTER_LEVEL_1"))
      flagsAraay.push("<:7732discordbughunterlv1:885687944986378270>");
    if (flags.toArray().includes("EARLY_SUPPORTER"))
      flagsAraay.push("<:3121discordearlysupporter:885687945019940885>");
    if (flags.toArray().includes("VERIFIED_DEVELOPER"))
      flagsAraay.push("<:5579developerbadge:885687944936062976>");
    if (flags.toArray().includes("EARLY_VERIFIED_DEVELOPER"))
      flagsAraay.push("<:5579developerbadge:885687944936062976>");
    let nitro = user.avatarURL({ dynamic: true });
    if (nitro !== null) {
      if (nitro.includes("gif"))
        flagsAraay.push("<:2937discordnitro:885687944915091516>");
    }
    var statusFull;
    if (
      interaction.guild.members.cache.filter(
        (member) => member.presence?.status == "dnd"
      )
    )
      statusFull = "🔴 | DND";
    if (
      interaction.guild.members.cache.filter(
        (member) => member.presence?.status == "offline"
      )
    )
      statusFull = "⚫ | Offline";
    if (
      interaction.guild.members.cache.filter(
        (member) => member.presence?.status == "online"
      )
    )
      statusFull = "🟢 | Online";
    if (
      interaction.guild.members.cache.filter(
        (member) => member.presence?.status == "idle"
      )
    )
      statusFull = "🟡 | Idle";
    var bot = false;
    if (user.bot) bot = true;
    console.log(interaction.member.permissions);
    let embed = new MessageEmbed()
      .setAuthor(user.username, user.avatarURL({ dynamic: true }))
      .setColor(interaction.member.displayHexColor)
      .addFields(
        {
          name: "**Name:**",
          value: user.username + "_ _",
          inline: false,
        },
        {
          name: "**Tag:**",
          value: "#" + user.discriminator + "_ _",
          inline: false,
        },
        {
          name: "**Id:**",
          value: user.id + "_ _",
          inline: false,
        },
        {
          name: "**Badge:**",
          value: flagsAraay + "_ _",
          inline: false,
        },
        {
          name: "**User Presence:**",
          value: statusFull + "_ _",
          inline: true,
        },
        {
          name: "**Bot:**",
          value: bot + "_ _",
          inline: false,
        },
        {
          name: "**Highest Role:**",
          value: "<@&" + interaction.member.roles.highest + "> _ _",
          inline: false,
        },
        {
          name: "**Joined Discord:**",
          value:
            `${moment(user.createdTimestamp).format(
              "YYYY/M/D"
            )} **\n** \`${moment(user.createdTimestamp).fromNow()}\`` + "_ _",
          inline: false,
        },
        {
          name: "**Joined Server:**",
          value:
            `${moment(user.joinedAt).format("YYYY/M/D")} \n \`${moment(
              user.joinedAt
            ).fromNow()}\`` + "_ _",
          inline: false,
        }
      )
      .setThumbnail(
        user.avatarURL({
          dynamic: true,
          format: "png",
          size: 1024,
        })
      )
      .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
      .setTimestamp();
    interaction.reply({
      embeds: [embed],
      ephemeral: true,
    });
  },
};
