const Canvas = require("canvas");

const av = {
  size: 256,
};

const imageWelcome = async (member) => {
  let username = member.user.username;
  let discrim = member.user.discriminator;
  let avatarURL = member.use.displayAvatarURL({
    format: "png",
    dynamic: false,
    size: av.size,
  });
};
