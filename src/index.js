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

async function main() {
  // holds all commands, this array has the commands parsed to JSON so it is able to be send to discord
  // REST api to update and show commands in body, and logs bot in, throws error is anything is wrong
  try {
    registerCommands();
    interactionCreate(client);
    client.login(BOT_TOKEN);
  } catch (err) {
    console.log(err);
  }
}

main();
