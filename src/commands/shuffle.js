const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("shuffle")
    .setDescription("Shuffles current queue"),
  async execute(interaction) {
    const queue = interaction.client.distube.getQueue(interaction);

    if (!queue) return await interaction.reply("There is no current queue.");

    try {
      await queue.shuffle();
      await interaction.reply("**Queue shuffled**");
    } catch {
      await interaction.reply("Something went wrong...");
    }
  },
};
