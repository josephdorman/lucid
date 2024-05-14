const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("play")
    .setDescription("Plays a song")
    .addStringOption((option) =>
      option
        .setName("query")
        .setDescription("The voice channel to join")
        .setRequired(true)
    ),
  async execute(interaction) {
    try {
      const query = interaction.options.getString("query");
      const channel = interaction.member.voice.channel;

      if (!channel) {
        return await interaction.reply({
          content: "You are not in a voice channel",
          ephemeral: true,
        });
      }

      await interaction.reply({
        content: `Loading \`${query}\``,
        ephemeral: true,
      });

      await interaction.client.distube.play(channel, query, {
        member: interaction.member,
        textChannel: interaction.channel,
        interaction,
      });

      await interaction.deleteReply();
    } catch (e) {
      await interaction.reply("Something went wrong...");
    }
  },
};
