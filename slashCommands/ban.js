const run = async (client, interaction) => {
  let member = interaction.options.getMember("user");
  let reason = interaction.options.getString("reason") || "No reason given";

  if (!member) {
    return interaction.reply("Invaild member");
  }

  try {
    await interaction.guild.bans.create(member, { reason });
    return interaction.reply(
      `${member.user.tag} has been banned for ${reason}`
    );
  } catch (err) {
    if (err) {
      console.error(err);
      return interaction.reply(`Failed to ban ${member.user.tag}`);
    }
  }
};

module.exports = {
  name: "ban",
  description: "Ban a member",
  perm: "BAN_MEMBERS",
  options: [
    {
      name: "user",
      description: "The user to ban",
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

// copy---------------------------------------------

// const run = async (client, interaction) => {
// 	let user = interaction.options.getUser("user")
// 	let reason = interaction.options.getString("reason") || "No reason given"

// 	if (!user) return interaction.reply("You must provide a user to ban")

// 	// ban
// 	try {
// 		await interaction.guild.bans.create(user, {
// 			reason,
// 		})
// 		return interaction.reply(`${user.tag} has been banned for *${reason}*`)
// 	} catch (e) {
// 		if (e) {
// 			console.error(e)
// 			return interaction.reply(`Failed to ban ${user.tag}`)
// 		}
// 	}
// }

// module.exports = {
// 	name: "ban",
// 	description: "Bans a user from the server.",
// 	perms: "BAN_MEMBERS",
// 	options: [
// 		{ name: "user", description: "The user to ban.", type: "USER", required: true },
// 		{
// 			name: "reason",
// 			description: "reason for the punishment.",
// 			type: "STRING",
// 			required: false,
// 		},
// 	],
// 	run,
// }
