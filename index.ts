import DiscordJS, { Intents } from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import mongoose from 'mongoose'
import 'dotenv/config'

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MEMBERS,
    ],
})

client.on('ready', () => {
    console.log('BerryBot is online')

    new WOKCommands(client, {
        commandsDir: path.join(__dirname, 'commands'),
        featuresDir: path.join(__dirname, 'features'),
        typeScript: true,
        // server/guild ID
        testServers: ['910179167251882014'],
        botOwners: ['328619106058108938'],
        mongoUri: process.env.MONGO_URI,
    })
})

client.login(process.env.TOKEN)