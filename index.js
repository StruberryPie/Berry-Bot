const Discord = require("discord.js");
require("dotenv").config();

// ---------------------------------------------------------------------
// code from Part 1 & Part 2

// const imageWelcome = require("./imageWelcome");
// ---------------------------------------------------------------------

const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"],
});

let bot = {
  client,
  prefix: "n.",
  owners: ["328619106058108938"],
};

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload);

client.loadEvents(bot, false);

module.exports = bot;

// ---------------------------------------------------------------------
// code from Part 1 & Part 2

// client.on("ready", () => {
//   console.log(`Loged in as ${client.user.tag}`);
// });

// client.on("messageCreate", (message) => {
//   if (message.content == "hi") {
//     message.reply("Hello World!");
//   }
// });

// const botLogsId = "946769680163536947";

// client.on("guildMemberAdd", async (member) => {
//   const img = await imageWelcome(member);
//   member.guild.channels.cache.get(botLogsId).send({
//     content: `<@${member.id}> Welcome to the server!`,
//     files: [img],
//   });
// });

// ---------------------------------------------------------------------

client.login(process.env.TOKEN);
