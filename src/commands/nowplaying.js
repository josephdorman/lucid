const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("np")
    .setDescription("Shows current playing audio"),
  async execute(interaction) {
    const queue = interaction.client.distube.getQueue(interaction);

    if (!queue) return await interaction.reply("There is no current queue.");

    try {
      const song = queue.songs[0];
      await interaction.reply(
        `**Now Playing**\n${song.name} - \`${song.formattedDuration}\``
      );
    } catch (e) {
      await interaction.reply("Something went wrong...");
    }
  },
};
