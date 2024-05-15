const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pause")
    .setDescription("Pauses the current song"),
  async execute(interaction) {
    const queue = interaction.client.distube.getQueue(interaction);

    if (!queue) {
      return await interaction.reply("There is no current queue.");
    } else if (queue.paused) {
      return await interaction.reply("Queue is already paused!");
    }

    try {
      await queue.pause();
      await interaction.reply(`**Paused the current song!**`);
    } catch (e) {
      await interaction.reply("Something went wrong...");
    }
  },
};
