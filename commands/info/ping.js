module.exports = {
  name: "ping",
  category: "info",
  permissions: [],
  devOnly: false,
  run: async ({ client, message, args }) => {
    message.reply("Pong");
  },
};

//copy---------------------------------------------------------

// module.exports = {
//   name: "ping",
//   category: "info",
//   permissions: [],
//   devOnly: false,
//   run: async ({client, message, args}) => {
//       message.reply("Pong")
//   }
// }
