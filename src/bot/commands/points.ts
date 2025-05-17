import WAWebJS from 'whatsapp-web.js';

import { getTemplatePoints, setTemplatePoints } from '../data/templatePoints';
import { getPointsFromMessage, getPreviousPointsFromMessage } from '../utils/getPointsFromMessage';

const formatter = new Intl.NumberFormat('es-ES');

export const handleAddPoints = async (message: WAWebJS.Message, chat: WAWebJS.Chat) => {
    let quotedMessage: WAWebJS.Message | undefined = undefined;
    if (!message.hasQuotedMsg) {
        message.reply('❌ Responde el mensaje desde el cual quieres sumar puntos');
        return;
    }

    quotedMessage = await message.getQuotedMessage();

    const previousPoints = getPreviousPointsFromMessage(quotedMessage.body);
    const newPoints = await getNewPoints(chat, quotedMessage);
    const totalPoints = previousPoints + newPoints;

    const pointsTemplate = getTemplatePoints();

    if (pointsTemplate) {
        const { template, mentions } = pointsTemplate;

        const formattedMessage = template
            .replace(/{anteriores}/g, formatter.format(previousPoints))
            .replace(/{nuevos}/g, formatter.format(newPoints))
            .replace(/{total}/g, formatter.format(totalPoints));

        chat.sendMessage(formattedMessage, {
            mentions,
        });
    } else {
        chat.sendMessage(
            `*Suma de puntos*\n*Puntos anteriores:* ${previousPoints}\n*Puntos nuevos:* ${newPoints}\n*Total de puntos:* ${totalPoints}\n\n*Plantilla de puntos no establecida*`
        );
    }
};

export const getNewPoints = async (chat: WAWebJS.Chat, quotedMessage: WAWebJS.Message) => {
    const chatMessages = await chat.fetchMessages({
        limit: 500,
    });

    const firstMessageIndex = chatMessages.findIndex((msg) => msg.id.id === quotedMessage.id.id);

    const messagesWithPoints = chatMessages.slice(firstMessageIndex + 1);

    const allPoints = messagesWithPoints.flatMap((msg) => getPointsFromMessage(msg.body));

    return allPoints.reduce((acc, num) => acc + num, 0);
};

export const handleAddPointsTemplate = (message: WAWebJS.Message, chat: WAWebJS.Chat) => {
    const body = message.body.split('\n');
    const errorMessage =
        '❌ Debes especificar una plantilla para los puntos que contenga los valores {anteriores} {nuevos} {total}.';

    if (body.length < 2) {
        message.reply(errorMessage);
        return;
    }

    const template = body.slice(1).join('\n');
    const isTemplateValid = templateValidation(template);

    if (!isTemplateValid) {
        message.reply(errorMessage);
        return;
    }

    setTemplatePoints({
        template: template,
        mentions: message.mentionedIds as unknown as string[],
    });

    chat.sendMessage('✅ Plantilla de puntos establecida.');
};

export const templateValidation = (template: string) => {
    const regex = /{anteriores}|{nuevos}|{total}/g;
    const matches = template.match(regex);

    if (matches && matches.length === 3) {
        return true;
    } else {
        return false;
    }
};
