// cc = clear chat
import { ICommand } from "wokcommands";

export default {
    category: 'Moderation',
    description: ' Deletes mutiple messages at once',

    permissions: ['ADMINISTRATOR'],
    requireRoles: true,

    minArgs: 1,
    maxArgs: 1,
    expectedArgs: '[amount]',

    slash: 'both',
    testOnly: true,

    callback: async ({ message, interaction, channel, args }) => {
        const amount = parseInt(args.shift()!)

        // used with predetermind default amount.
        // to use below, remove amount above as well as "minArgs: 1,"
        // const amount = args.length ? parseInt(args.shift()!) : 10

        if (message) {
            await message.delete()
        }

        // Bulk delete ============================================

        // const { size } = await channel.bulkDelete(amount, true)

        // Bulk delete ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

        // Fetch and then delete messages =========================

        const messages = await channel.messages.fetch({ limit: amount})
        const { size } = messages

        messages.forEach((message) => message.delete())

        // Fetch and then delete messages ^^^^^^^^^^^^^^^^^^^^^^^^^

        const reply = `Deleted ${size} message(s).`

        if (interaction) {
            return reply
        }

        channel.send(reply)
    }
} as ICommand