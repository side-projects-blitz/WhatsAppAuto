import { Message } from 'whatsapp-web.js';

import { commands } from '../data/commands';
import { CommandLabels } from '../enums/commands.enum';
import { getHasPermission } from '../utils/getHasPermission';
import {
    getNoPermissionCommandMessage,
    getUnimplementedCommandMessage,
} from '../utils/getRandomAction';
import { isCommand, isValidCommand } from '../utils/validator';

export async function onMessageCreate(message: Message) {
    const chat = await message.getChat();
    if (!chat.isGroup) return;

    const body = message.body.toLowerCase();
    const mentions: string[] = message.mentionedIds as unknown as string[];

    console.log('Mensaje recibido:', body);
    console.log('Menciones:', mentions);

    if (!isCommand(body)) return;

    const { command, isValid } = isValidCommand(body, Object.keys(commands) as CommandLabels[]);
    if (!isValid || !command) {
        await message.reply(getUnimplementedCommandMessage());
        return;
    }

    const { check, permission, run } = commands[command];
    if (!check({ body, mentions })) return;

    const hasPerm = await getHasPermission(message, chat, permission);
    if (!hasPerm) {
        await message.reply(getNoPermissionCommandMessage());
        return;
    }
    run({ message, chat });

    //   if (body === "!start") return startDynamic(message, chat);
    //   if (body === "!end") return endDynamic(chat);
}
