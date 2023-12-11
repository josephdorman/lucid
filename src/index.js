require("dotenv").config();
const { REST, Routes, Collection } = require("discord.js");
const { Client, GatewayIntentBits } = require("discord.js");
const fs = require("fs");
const path = require("path");

// Set intents for the bot
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const commands = [];
const commandsMap = new Collection();

// Grab env variables
const { BOT_TOKEN } = process.env;
const { APP_ID } = process.env;
const { GUILD_ID } = process.env;

// set bottoken to be able to interact with discords REST API
const rest = new REST({ version: "10" }).setToken(BOT_TOKEN);

// log bot when its ready to recieve commands
client.on("ready", () => {
  console.log(`[INFO] ${client.user.id} has logged in!`);
});

// whenever a interaction is created run commands
client.on("interactionCreate", (interaction) => {
  const command = commandsMap.get(interaction.commandName);

  if (!command) return;

  // make sure it is a chat input command and not anything else
  if (interaction.isChatInputCommand()) {
    command.execute(interaction);
  }
});

// grab all commands from command folder and register it
async function registerSlashCommands() {
  const commandFiles = fs
    .readdirSync(path.join(__dirname, "commands"))
    .filter((file) => file.endsWith(".js"));

  commandFiles.map((file) => {
    const command = require(path.join(__dirname, "commands", `${file}`));
    commands.push(command.data);
    commandsMap.set(command.data.name, command);
  });
}

async function main() {
  // holds all commands, this array has the commands parsed to JSON so it is able to be send to discord
  // REST api to update and show commands in body, and logs bot in, throws error is anything is wrong
  try {
    console.log("Started refreshing application (/) commands.");
    await registerSlashCommands();
    await rest.put(Routes.applicationGuildCommands(APP_ID, GUILD_ID), {
      body: commands,
    });
    client.login(BOT_TOKEN);
  } catch (err) {
    console.log(err);
  }
}

main();
