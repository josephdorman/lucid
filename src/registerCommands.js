const { REST, Routes } = require("discord.js");
const getAllCommands = require("./utils/getAllCommands");
const config = require("../config.json");

module.exports = async () => {
  // Grab env variables
  const { BOT_TOKEN } = config;
  const { APP_ID } = config;
  const { GUILD_ID } = config;

  const files = getAllCommands();
  const commands = [];

  const rest = new REST({ version: "10" }).setToken(BOT_TOKEN);

  files.map((file) => {
    const command = require(file);
    commands.push(command.data);
  });

  console.log("Started refreshing application (/) commands.");
  await rest.put(Routes.applicationGuildCommands(APP_ID, GUILD_ID), {
    body: commands,
  });
};
