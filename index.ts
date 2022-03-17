import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('BerryBot is online')

    const guildId ='910179167251882014'
    const guild = client.guilds.cache.get(guildId)
    let commands

    if (guild) {
        commands = guild.commands
    } else {
        commands = client.application?.commands
    }

    commands?.create({
        name: 'ping',
        description:'Replies with pong.',
    })

    commands?.create({
        name: 'add',
        description: 'Adds two numbers.',
        options: [
            {
                name: 'num1',
                description: 'The 1st number.',
                required: true,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
            },
            {
                name: 'num2',
                description: 'The second number.',
                required: true,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
            }
        ]
    })
})

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) {
        return
    }

    const { commandName, options } = interaction

    // ping slash command
    if (commandName === 'ping') {
        interaction.reply({
            content: 'pong',
            ephemeral: true,
        })
    } 
    // adding slash command
    else if (commandName === 'add') {
        const num1 = options.getNumber('num1')!
        const num2 = options.getNumber('num2')!

        // creates delay -----------------------------------------------
        await interaction.deferReply({
            ephemeral: true
        })

        await new Promise(resolve => setTimeout(resolve, 5000))
        // creates delay ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

        // added await and editReply for delay to work.
        // remove everything between creates delay, await, change editReply => reply, and uncomment ephemeral: true.
        await interaction.editReply({
            content: `The sum is ${num1 + num2}`,
            // ephemeral: true,
        })
    }
})

client.login(process.env.TOKEN)