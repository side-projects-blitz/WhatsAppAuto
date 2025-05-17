import WAWebJS from 'whatsapp-web.js';

import { addToHiatus, hiatusList, isInHiatus, removeFromHiatus } from '../data/hiatusList';

export const handleAddToHiatus = async (message: WAWebJS.Message) => {
    const parts = message.body.split(' ');

    const errorMessage =
        '❌ Etiqueta a la persona que quieres poner en hiatus. Ejemplo: !hiatus @user';

    if (parts.length < 2) {
        message.reply(errorMessage);
        return;
    }

    const userId = parts[1].split('@')[1];

    if (!userId) {
        message.reply(errorMessage);
        return;
    }

    if (!hiatusList.includes(userId)) {
        hiatusList.push(userId);
        message.reply(`Has añadido a ${userId} al modo hiatus.`);
    } else {
        message.reply(`${userId} ya está en hiatus.`);
    }
};

export const handleRemoveFromHiatus = async (message: WAWebJS.Message) => {
    const parts = message.body.split(' ');

    const errorMessage =
        '❌ Etiqueta a la persona que quieres remover del hiatus. Ejemplo: !unhiatus @user';

    if (parts.length < 2) {
        message.reply(errorMessage);
        return;
    }

    const userId = parts[1].split('@')[1];

    if (!userId) {
        message.reply(errorMessage);
        return;
    }

    if (hiatusList.includes(userId)) {
        removeFromHiatus(userId);
        message.reply(`Has removido a ${userId} del hiatus.`);
    } else {
        message.reply(`${userId} ya se encuentra en hiatus.`);
    }
};

export const handleHiatusMe = async (message: WAWebJS.Message, chat: WAWebJS.Chat) => {
    const senderId = message.from;

    const saveId = senderId.split('@')[0];
    if (!isInHiatus(saveId)) {
        addToHiatus(saveId);
        message.reply(`@${saveId} ahora estás en hiatus.`, chat.id._serialized, {
            mentions: [senderId],
        });
    } else {
        message.reply('Ya estás en hiatus.');
    }
};

export const handleUnhiatusMe = async (message: WAWebJS.Message, chat: WAWebJS.Chat) => {
    const senderId = message.from;

    const saveId = senderId.split('@')[0];
    if (hiatusList.includes(saveId)) {
        removeFromHiatus(saveId);
        message.reply(`@${saveId} has salido del hiatus.`, chat.id._serialized, {
            mentions: [senderId],
        });
    } else {
        message.reply('No estás en hiatus.');
    }
};
