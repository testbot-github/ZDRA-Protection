const {
  Client,
  CommandInteraction,
  MessageButton,
  MessageActionRow,
} = require("discord.js");
const db = require("quick.db");

/**
 *
 * @param {Client} client
 * @param {CommandInteraction} interaction
 * @param {String[]} args
 */

module.exports = async (client, interaction) => {
  if (interaction.isCommand()) {
    let settings = db.fetch(`Settings_${interaction.guild.id}`);
    if (settings == null)
      return db.set(`Settings_${interaction.guild.id}`, {
        prefix: require("../../config/bot.json").mainPrefix,
        lang: require("../../config/bot.json").mainLang,
        admins: [`${require("../../config/bot.json").mainAdmin}`],
      });
    let lang = settings.lang;
    let admins = settings.admins;

    if (lang == "en") {
      if (!admins.includes(interaction.user.id))
        return interaction.reply({
          content: "> :x: **You Are Not From The Allowed Admins**",
          ephemeral: true,
        });
    } else if (lang == "ar") {
      if (!admins.includes(interaction.user.id))
        return interaction.reply({
          content: "> :x: **انت لست من ادمنز البوت**",
          ephemeral: true,
        });
    }

    const cmd = client.slashCommands.get(interaction.commandName);
    if (!cmd)
      return interaction
        .followUp({ content: "An error has occured " })
        .catch(() => {})
        .then((m) => {
          m.delete().catch(() => {});
        });
    const args = [];
    for (let option of interaction.options.data) {
      if (option.type === "SUB_COMMAND") {
        if (option.name) args.push(option.name);
        option.options?.forEach((x) => {
          if (x.value) args.push(x.value);
        });
      } else if (option.value) args.push(option.value);
    }

    interaction.member = interaction.guild.members.cache.get(
      interaction.user.id
    );
    cmd.run(client, interaction, args);

    if (interaction.isContextMenu()) {
      await interaction.deferReply({ ephemeral: false });
      const command = client.slashCommands.get(interaction.commandName);
      if (command) command.run(client, interaction);
    }
  }
};
