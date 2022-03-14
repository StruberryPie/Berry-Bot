const run = async (client, interaction) => {
  let member = interaction.options.getMember("user");
  let reason = interaction.options.getString("reason") || "No reason given";

  if (!member) {
    return interaction.reply("Invaild member");
  }

  try {
    await interaction.guild.members.kick(member, reason);
    return interaction.reply(
      `${member.user.tag} has been kicked for ${reason}`
    );
  } catch (err) {
    if (err) {
      console.error(err);
      return interaction.reply(`Failed to kick ${member.user.tag}`);
    }
  }
};

module.exports = {
  name: "kick",
  description: "Kick a member",
  perm: "KICK_MEMBERS",
  options: [
    {
      name: "user",
      description: "The user to kick",
      type: "USER",
      require: true,
    },
    {
      name: "reason",
      description: "reason for punishment",
      type: "STRING",
      required: false,
    },
  ],
  run,
};

// copy----------------------------------------------------------

// const run = async (client, interaction) => {
// 	let user = interaction.options.getUser("user")
// 	let reason = interaction.options.getString("reason") || "No reason given"

// 	if (!user) return interaction.reply("You must provide a user to kick")

// 	// ban
// 	try {
// 		await interaction.guild.members.kick(user, reason)
// 		return interaction.reply(`${user.tag} has been kicked for *${reason}*`)
// 	} catch (e) {
// 		if (e) {
// 			console.error(e)
// 			return interaction.reply(`Failed to kick ${user.tag}`)
// 		}
// 	}
// }

// module.exports = {
// 	name: "kick",
// 	description: "Kicks a user from the server.",
// 	perms: "KICK_MEMBERS",
// 	options: [
// 		{ name: "user", description: "The user to kick.", type: "USER", required: true },
// 		{
// 			name: "reason",
// 			description: "reason for the punishment.",
// 			type: "STRING",
// 			required: false,
// 		},
// 	],
// 	run,
// }
