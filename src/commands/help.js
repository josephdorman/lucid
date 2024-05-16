const { SlashCommandBuilder } = require("discord.js");
const getAllCommands = require("../utils/getAllCommands");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Shows all commands available"),
  async execute(interaction) {
    const files = getAllCommands();
    const commands = files
      .map((file) => {
        const command = require(file);
        return `/${command.data.name} | \`${command.data.description}\``;
      })
      .join("\n");

    await interaction.reply(`**All Commands**\n${commands}`);
  },
};
