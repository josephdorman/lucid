const { SlashCommandBuilder } = require("discord.js");
const { joinVoiceChannel } = require("@discordjs/voice");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("join")
    .setDescription("Joins a voice channel"),
  async execute(interaction) {
    const channel = interaction.member.voice.channel;

    if (!channel) {
      return await interaction.reply("You are not in a voice channel");
    }

    const voiceConnection = await joinVoiceChannel({
      channelId: channel.id,
      guildId: interaction.guild.id,
      adapterCreator: interaction.guild.voiceAdapterCreator,
    });

    await interaction.reply(`Joined ${channel}`);
  },
};
