import WAWebJS from 'whatsapp-web.js';

import { commands } from '../data/commands';
import { Permission } from '../enums/permission.enum';

const permissionLabels: Record<Permission, string> = {
    [Permission.ADMIN]: '👑 *Administradores*',
    [Permission.EVERYONE]: '👥 *Todos*',
    [Permission.ME]: '🙋 *Solo Ale*',
};

export const handleHelp = async (message: WAWebJS.Message) => {
    let helpMessage = '*📜 Lista de comandos disponibles:*\n\n';

    const groupedCommands: Record<Permission, (typeof commands)[keyof typeof commands][]> = {
        [Permission.ADMIN]: [],
        [Permission.EVERYONE]: [],
        [Permission.ME]: [],
    };

    for (const key in commands) {
        const cmd = commands[key as keyof typeof commands];
        groupedCommands[cmd.permission].push(cmd);
    }

    const orderedPermissions: Permission[] = [Permission.EVERYONE, Permission.ADMIN, Permission.ME];

    for (const permission of orderedPermissions) {
        const commandsList = groupedCommands[permission];
        if (commandsList.length === 0) continue;

        helpMessage += `${permissionLabels[permission]}:\n`;

        for (const { command, description } of commandsList) {
            helpMessage += `  • *${command}*: ${description}\n`;
        }

        helpMessage += '\n';
    }

    message.reply(helpMessage.trim());
};
