import WAWebJS from 'whatsapp-web.js';

import { getMentionInfoFromQuote } from '../utils/getMentionInfo';
import { getRandomDryHugMessage } from '../utils/getRandomAction';

export const handleHug = async (message: WAWebJS.Message, chat: WAWebJS.Chat) => {
    const info = await getMentionInfoFromQuote(message);

    if (!info) {
        message.reply('❌ Responde un mensaje de alguien para darle un abrazo.');
        return;
    }

    const { fromJid, quotedJid, fromMention, quotedMention } = info;
    const messageText = getRandomDryHugMessage(fromMention, quotedMention);

    chat.sendMessage(messageText, {
        mentions: [fromJid, quotedJid],
    });
};
