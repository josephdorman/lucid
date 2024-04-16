const { SlashCommandBuilder } = require("discord.js");
const { getVoiceConnection } = require("@discordjs/voice");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("leave")
    .setDescription("Leaves the voice channel"),
  async execute(interaction) {
    const voiceConnection = await getVoiceConnection(interaction.guild.id);

    if (!voiceConnection) {
      return await interaction.reply("Bot currently not in a voice channel");
    }

    voiceConnection.destroy();
    await interaction.reply("Left the voice channel");
  },
};
