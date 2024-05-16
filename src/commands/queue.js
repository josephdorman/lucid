const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("queue")
    .setDescription("Shows the current queue"),
  async execute(interaction) {
    const queue = interaction.client.distube.getQueue(interaction);

    if (!queue) {
      return await interaction.reply("There is no current queue.");
    }

    try {
      // .name, .sourve .formattedDuration, .thumbnail, .url are a few of the properties to access
      const q = queue.songs
        .map(
          (song, i) =>
            `${i === 0 ? "Playing:" : `${i}.`} ${song.name} - \`${
              song.formattedDuration
            }\``
        )
        .join("\n");

      await interaction.reply(`**Server Queue** \n${q}`);
    } catch (e) {
      await interaction.reply("Something went wrong...");
    }
  },
};
