require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");
const interactionCreate = require("./events/interactionCreate");
const registerCommands = require("./registerCommands");

// Set intents for the bot
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// Grab env variables
const { BOT_TOKEN } = process.env;

// log bot when its ready to recieve commands
client.on("ready", () => {
  console.log(`[INFO] ${client.user.id} has logged in!`);
});

// registercommands only needs to be ran whenever a commands gets updated
registerCommands();

// set up interactionCreate event listener, this will be turned into a event handeler to listen to
// every event and not just interactionCreate
interactionCreate(client);
client.login(BOT_TOKEN);
