import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'Replies with pong',

    slash: 'both',
    testOnly: true,

    callback: ({}) => {
        return 'Pong'
    },
} as ICommand

// ------------------------------------------------------------
// long version of the reply for both slash and legacy commands

//     callback: ({ message, interaction }) => {
//         if (message) {
//             message.reply('Pong')
//         }
//         if (interaction) {
//             interaction.reply('Pong')
//         }
//     },
// } as ICommand

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^