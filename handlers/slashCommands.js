const fs = require("fs");

const getFiles = (path, ending) => {
  return fs.readdirSync(path).filter((file) => file.endsWith(ending));
};

module.exports = (bot, reload) => {
  const { client } = bot;

  let slashCommands = getFiles("./slashCommands/", ".js");

  if (slashCommands.length === 0) {
    console.log("No slash commands loaded");
  }

  slashCommands.forEach((file) => {
    if (reload) {
      delete require.cache[require.resolve(`../slashCommands/${file}`)];
    }
    const slashCmd = require(`../slashCommands/${file}`);
    client.slashCommands.set(slashCmd.name, slashCmd);
  });
};
