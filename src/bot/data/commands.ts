import { handleCountMyMessages } from '../commands/count-messages';
import { handleHelp } from '../commands/help/command';
import {
    handleAddToHiatus,
    handleHiatusMe,
    handleRemoveFromHiatus,
    handleUnhiatusMe,
} from '../commands/hiatus';
import { handleHug } from '../commands/hug';
import { handleKick } from '../commands/kick';
import { handleKiss } from '../commands/kiss';
import { handleAddPoints, handleAddPointsTemplate } from '../commands/points';
import { sendSpam } from '../commands/spam';
import { CommandLabels } from '../enums/commands.enum';
import { Permission } from '../enums/permission.enum';
import { CommandHandler } from '../interfaces/command';
import { commandValidation } from '../utils/validator';

export const commands: Record<CommandLabels, CommandHandler> = {
    [CommandLabels.SPAM]: {
        command: CommandLabels.SPAM,
        description:
            'Envía un mensaje etiquetado a todos los miembros del grupo que no están en hiatus.',
        permission: Permission.ADMIN,
        check: ({ body }) => {
            const response = commandValidation({
                body,
                matchText: CommandLabels.SPAM,
                validationType: ['full'],
            });
            return response.isValid;
        },
        run: async ({ chat }) => sendSpam(chat),
    },
    [CommandLabels.HIATUS]: {
        command: '!hiatus',
        description: 'Añade a un usuario de tu selección al modo hiatus.',
        permission: Permission.ADMIN,
        check: ({ body }) => body.startsWith('!hiatus '),
        run: async ({ message }) => handleAddToHiatus(message),
    },
    [CommandLabels.UNHIATUS]: {
        command: '!unhiatus',
        description: 'Remueve a un usuario de tu selección del modo hiatus.',
        permission: Permission.ADMIN,
        check: ({ body }) => body.startsWith('!unhiatus '),
        run: async ({ message }) => handleRemoveFromHiatus(message),
    },
    [CommandLabels.HIATUSME]: {
        command: '!hiatusme',
        description: 'Te retira del spam general del grupo.',
        permission: Permission.EVERYONE,
        check: ({ body }) => body === '!hiatusme',
        run: async ({ message, chat }) => handleHiatusMe(message, chat),
    },
    [CommandLabels.UNHIATUSME]: {
        command: '!unhiatusme',
        description: 'Te agrega al spam general del grupo.',
        permission: Permission.EVERYONE,
        check: ({ body }) => body === '!unhiatusme',
        run: async ({ message, chat }) => handleUnhiatusMe(message, chat),
    },
    [CommandLabels.COUNTMYMESSAGES]: {
        command: '!contarmismensajes',
        description:
            'Si respondes a un mensaje, cuenta los mensajes que has enviado desde entonces. \nSi no, cuenta los mensajes que has enviado desde siempre.',
        permission: Permission.ME,
        check: ({ body }) => body === '!contarmismensajes',
        run: async ({ message, chat }) => handleCountMyMessages(message, chat),
    },
    [CommandLabels.SETPOINTSTEMPLATE]: {
        command: '!plantillapuntos',
        description:
            'Establece la plantilla de puntos para el grupo. \nEjemplo: \n!plantillapuntos \n[template].',
        permission: Permission.ADMIN,
        check: ({ body }) => body.startsWith('!plantillapuntos '),
        run: async ({ message, chat }) => handleAddPointsTemplate(message, chat),
    },
    [CommandLabels.ADDPOINTS]: {
        command: '!sumarpuntos',
        description: 'Suma los puntos del grupo desde el mensaje que se citó en el comando.',
        permission: Permission.ADMIN,
        check: ({ body }) => body === '!sumarpuntos',
        run: async ({ message, chat }) => handleAddPoints(message, chat),
    },
    [CommandLabels.KICK]: {
        command: '!kick',
        description: 'Le das una patada a un usuario del grupo.',
        permission: Permission.EVERYONE,
        check: ({ body }) => body === '!kick',
        run: async ({ message, chat }) => handleKick(message, chat),
    },
    [CommandLabels.KISS]: {
        command: '!kiss',
        description: 'Le das un beso a un usuario del grupo.',
        permission: Permission.EVERYONE,
        check: ({ body }) => body === '!kiss',
        run: async ({ message, chat }) => handleKiss(message, chat),
    },
    [CommandLabels.HUG]: {
        command: '!hug',
        description: 'Le das un abrazo a un usuario del grupo.',
        permission: Permission.EVERYONE,
        check: ({ body }) => body === '!hug',
        run: async ({ message, chat }) => handleHug(message, chat),
    },
    [CommandLabels.HELP]: {
        command: '!help',
        description: 'Muestra la lista de comandos disponibles.',
        permission: Permission.EVERYONE,
        check: ({ body }) => body === '!help',
        run: async ({ message }) => handleHelp(message),
    },
};
