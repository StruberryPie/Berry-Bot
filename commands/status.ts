import { ICommand } from "wokcommands";

export default {
    category: 'Configuration',
    description: 'Set the bots status',

    minArgs: 1,
    expectedArgs: '<status>',

    slash: 'both',
    testOnly: true,

    ownerOnly: true,

    callback: ({ client, text }) => {
        client.user?.setPresence({
            status: 'dnd',
            activities: [{
                name: text
            }
            ]
        })

        return 'Status updated'
    }
} as ICommand