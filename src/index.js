const { Client, GatewayIntentBits } = require("discord.js");
const player = require("./player");
const interactionCreate = require("./events/interactionCreate");
const ready = require("./events/ready");
const registerCommands = require("./registerCommands");
const config = require("../config.json");

// Set intents for the bot
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.MessageContent,
  ],
});

// Grab env variables
const { BOT_TOKEN } = config;

// Initialize player
player(client);

// registercommands only needs to be ran whenever a commands gets updated
registerCommands();

// set up event listeners, this will be turned into a event handeler to listen to
// every event
ready(client);
interactionCreate(client);

// log bot in
client.login(BOT_TOKEN);
