require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");
const interactionCreate = require("./events/interactionCreate");
const ready = require("./events/ready");
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

// registercommands only needs to be ran whenever a commands gets updated
registerCommands();

// set up event listeners, this will be turned into a event handeler to listen to
// every event
ready(client);
interactionCreate(client);

// log bot in
client.login(BOT_TOKEN);
