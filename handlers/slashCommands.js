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

// copy-------------------------------------------------

// const fs = require("fs")

// const getFiles = (path, ending) => {
// 	return fs.readdirSync(path).filter((f) => f.endsWith(ending))
// }

// module.exports = (bot, reload) => {
// 	const { client } = bot

// 	let slashcommands = getFiles("./slashcommands/", ".js")

// 	if (slashcommands.legnth === 0) {
// 		console.log("No events to load")
// 	}

// 	slashcommands.forEach((f, i) => {
// 		if (reload) delete require.cache[require.resolve(`../slashcommands/${f}`)]
// 		const slashcmd = require(`../slashcommands/${f}`)
// 		client.slashcommands.set(slashcmd.name, slashcmd)
// 	})
// }
