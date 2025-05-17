import { Chat, ChatId } from 'whatsapp-web.js';

import { hiatusList } from '../data/hiatusList';

export const sendSpam = async (chat: Chat) => {
    // @ts-expect-error: Library type error. GroupMetadata is not defined in the type but is in the library.
    const participants = chat.groupMetadata.participants;

    const mentions: string[] = [];
    let mentionText = '';

    for (const participant of participants) {
        const id: ChatId = participant.id;

        if (hiatusList.includes(id.user)) {
            mentionText += `@${id.user} (hiatus)\n`;
            continue;
        }
        mentions.push(id._serialized);
        mentionText += `@${id.user}\n`;
    }

    chat.sendMessage(mentionText.trim(), {
        mentions,
    });
};
