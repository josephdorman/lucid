require("dotenv").config();
const { REST, Routes } = require("discord.js");
const getAllCommands = require("./utils/getAllCommands");

module.exports = async () => {
  // Grab env variables
  const { BOT_TOKEN } = process.env;
  const { APP_ID } = process.env;
  const { GUILD_ID } = process.env;
  const { DEV_GUILD_ID } = process.env;

  const files = getAllCommands();
  const commands = [];

  const rest = new REST({ version: "10" }).setToken(BOT_TOKEN);

  files.map((file) => {
    const command = require(file);
    commands.push(command.data);
  });

  console.log("Started refreshing application (/) commands.");
  await rest.put(Routes.applicationGuildCommands(APP_ID, DEV_GUILD_ID), {
    body: commands,
  });
};
