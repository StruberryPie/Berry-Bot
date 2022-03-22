import { Message, MessageReaction, User } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'Testing',

    callback: ({ message, channel }) => {
        // Message Colletor =============================================
        
        // message.reply('Enter you username:')
        
        // const filter = (m: Message) => {
        //     return m.author.id === message.author.id
        // }
        
        // const collector = channel.createMessageCollector({
        //     filter,
        //     max: 1,
        //     time: 1000 * 60
        // })

        // collector.on('collect', message => {
        //     console.log(message.content)
        // })

        // collector.on('end', collected => {
        //     if (collected.size === 0) {
        //         message.reply('You did not provide your username.')
        //         return
        //     }
        
        //     let text = 'Collected:\n\n'
        
        //     collected.forEach((message) => {
        //         text += `${message.content}\n`
        //     })

        //     message.reply(text)
        // })
        
        // Message Colletor ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

        // Reaction Collector ===========================================

        message.reply('Please confirm this action:')
        message.react('👍')
        
        const filter = (reaction: MessageReaction, user: User) => {
            return user.id === message.author.id
        }

        const collector = message.createReactionCollector({
            filter,
            max: 1,
            time: 1000 * 60
        })

        collector.on('collect', reaction => {
            console.log(reaction.emoji)
        })

        collector.on('end', collected => {
            if (collected.size === 0) {
                message.reply('You did not react in time.')
                return
            }

            let text = 'Collected:\n\n'

            collected.forEach((message) => {
                text += `${message.emoji.name}\n`
            })

            message.reply(text)
        })

        // Reaction Collector ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    }
} as ICommand