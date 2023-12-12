module.exports = (client) => {
  client.on("ready", () => {
    console.log(`[INFO] ${client.user.id} has logged in!`);
  });
};
