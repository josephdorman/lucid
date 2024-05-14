const { DisTube } = require("distube");
const { YtDlpPlugin } = require("@distube/yt-dlp");

module.exports = async (client) => {
  client.distube = new DisTube(client, {
    leaveOnStop: false,
    emitNewSongOnly: true,
    emitAddSongWhenCreatingQueue: false,
    emitAddListWhenCreatingQueue: false,
    plugins: [new YtDlpPlugin()],
  });

  client.distube.on("playSong", (queue, song) =>
    queue.textChannel.send(
      `Now playing \`${song.name}\` - \`${song.formattedDuration}\``
    )
  );
};
