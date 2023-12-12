const { SlashCommandBuilder, ChannelType } = require("discord.js");
const { joinVoiceChannel } = require("@discordjs/voice");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("join")
    .setDescription("Joins a voice channel")
    .addChannelOption((option) =>
      option
        .setName("channel")
        .setDescription("The channel to join")
        .setRequired(true)
        .addChannelTypes(ChannelType.GuildVoice)
    ),
  async execute(interaction) {
    const voiceChannel = interaction.options.getChannel("channel");
    const voiceConnection = await joinVoiceChannel({
      channelId: voiceChannel.id,
      guildId: interaction.guild.id,
      adapterCreator: interaction.guild.voiceAdapterCreator,
    });

    await interaction.reply(`Joined ${voiceChannel}`);
    console.log(voiceConnection);
  },
};
