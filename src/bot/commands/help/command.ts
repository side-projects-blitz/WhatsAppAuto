import WAWebJS from 'whatsapp-web.js';

import { commands } from '../../data/commands';
import { Permission } from '../../enums/permission.enum';

import { TITLE_LABEL } from './consts';
import { formatCommandGroup, groupedCommandsByPermission } from './utils';

export const handleHelp = async (message: WAWebJS.Message) => {
    let helpMessage = `${TITLE_LABEL}\n\n`;

    const groupedCommands = groupedCommandsByPermission(Object.values(commands));

    // Sort the permissions in the order you want to display them
    const orderedPermissions: Permission[] = [Permission.EVERYONE, Permission.ADMIN, Permission.ME];

    orderedPermissions.forEach((permission) => {
        helpMessage += formatCommandGroup(permission, groupedCommands[permission]);
    });

    message.reply(helpMessage.trim());
};
