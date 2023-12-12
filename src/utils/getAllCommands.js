const fs = require("fs");
const path = require("path");

module.exports = () => {
  const fileNames = [];

  // get commands from commands directory
  const files = fs.readdirSync(path.join(__dirname, "..", "commands"));

  // push the directory path to the fileNames array
  files.map((file) => {
    fileNames.push(
      path.join(path.join(__dirname, "..", "commands", `${file}`))
    );
  });

  return fileNames;
};
