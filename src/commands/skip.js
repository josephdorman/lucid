const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("skip")
    .setDescription("Skips the current song"),
  async execute(interaction) {
    const queue = interaction.client.distube.getQueue(interaction);

    if (!queue) {
      return await interaction.reply("There is no current queue.");
    }

    try {
      await queue.skip();
      await interaction.reply(`**Skipped!**`);
    } catch (e) {
      await interaction.reply("Something went wrong...");
    }
  },
};
