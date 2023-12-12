const { Collection } = require("discord.js");
const getAllCommands = require("../utils/getAllCommands");

module.exports = (client) => {
  const files = getAllCommands();
  const commandsMap = new Collection();

  // get command files and load them into the commandsMap
  files.map((file) => {
    const command = require(file);
    commandsMap.set(command.data.name, command);
  });

  // execute on interactionCreate event
  client.on("interactionCreate", (interaction) => {
    // get commands from commandsMap
    const command = commandsMap.get(interaction.commandName);

    // if no command is found, return
    if (!command) return;

    // make sure it is a chat input command and not anything else before executing
    if (interaction.isChatInputCommand()) {
      command.execute(interaction);
    }
  });
};
