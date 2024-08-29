# Lucid

![LucidImage](https://github.com/josephdorman/lucid/blob/main/src/assets/lucidbot.jpg)

# Commands

Using the command `/help` in a discord will show all available commands

- `/dc` | Disconnects from the voice channel
- `/help` | Shows all commands available
- `/np` | Shows current playing audio
- `/pause` | Pauses the current song
- `/play` | Plays a song
- `/queue`| Shows the current queue
- `/resume` | Resumes the current song
- `/shuffle` | Shuffles current queue
- `/skip` | Skips the current song

# Features

- Easy to setup and customize
- Supports over 700+ websites

# Configuration

> [!CAUTION]
> **NEVER** share this information with anyone or display it publicly. If you intend to host this bot elsewhere and not on your host machine I **HIGHLY** suggest using dotenv instead of this config.json to prevent leaking this information, more details [here](https://github.com/josephdorman/lucid/wiki).

Located in the main directory you will find `config.json`, in which you will replace the placeholder values (ex. BOT_TOKEN_HERE) with your own.

`config.json`

```json
{
  "BOT_TOKEN": "BOT_TOKEN_HERE",
  "CHANNEL_ID": "CHANNEL_ID_HERE",
  "GUILD_ID": "GUILD_ID_HERE"
}
```

I'm not going to cover how to create new commands or host this bot, etc, information on that will be on the wiki located [here](https://github.com/josephdorman/lucid/wiki).

# Disclaimer

The creator of this bot does not condone or is responsible for the use of using audio sources from sites that do not permit it and falls under copyright according to their terms.
