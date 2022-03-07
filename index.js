const Discord = require("discord.js");
// require("dotenv").config();
require("dotenv").config();

const botLogsId = "946769680163536947";

const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"],
});

client.on("ready", () => {
  console.log(`Loged in as ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.content == "hi") {
    message.reply("Hello World!");
  }
});

client.on("guildMemberAdd", (member) => {
  member.guild.channels.cache
    .get(botLogsId)
    .send(`<@${member.id}> Welcome to the server!`);
});

client.login(process.env.TOKEN);
