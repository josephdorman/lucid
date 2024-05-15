const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("resume")
    .setDescription("Resumes the current song"),
  async execute(interaction) {
    const queue = interaction.client.distube.getQueue(interaction);

    if (!queue) {
      return await interaction.reply("There is no current queue.");
    } else if (!queue.paused) {
      return await interaction.reply("Queue isn't paused!");
    }

    try {
      await queue.resume();
      await interaction.reply(`**Resumes the current song!**`);
    } catch (e) {
      await interaction.reply("Something went wrong...");
    }
  },
};
