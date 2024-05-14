const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("dc")
    .setDescription("Disconnects from the voice channel"),
  async execute(interaction) {
    try {
      // Possibly add restrictions here
      // Ex. if member is not in same VC as bot, restrict the command (don't dc bot)

      await interaction.client.distube.voices.leave(interaction);

      await interaction.reply("Disconnected from the voice channel");
    } catch (e) {
      return await interaction.reply("Something went wrong...");
    }
  },
};
