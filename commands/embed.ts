import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'Sends an embed',

    permissions: ['ADMINISTRATOR'],

    callback: ({ message, text }) => {
        const embed = new MessageEmbed()
            .setDescription('Hello World')
            .setTitle('Title')
            // can use Hex for color
            .setColor('RED')
            .setAuthor({name: 'Stru'})
            .setFooter({text: 'Footer'})
            .addFields([
                {
                    name: 'name',
                    value: 'value',
                    inline: true,
                },
                {
                    name: 'name 2',
                    value: 'value 2',
                    inline: true,
                },
            ])
            .addField('name 3', 'value 3')
        return embed
    }
} as ICommand