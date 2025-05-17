import { Permission } from '../../enums/permission.enum';
import { CommandHandler } from '../../interfaces/command';

import { PERMISSION_LABEL } from './consts';

export function groupedCommandsByPermission(commands: CommandHandler[]) {
    const groupedCommands = {} as Record<Permission, CommandHandler[]>;

    commands.forEach((command) => {
        // Add the command to the appropriate group based on its permission
        if (!groupedCommands[command.permission]) {
            groupedCommands[command.permission] = [];
        }

        // Push the command to the corresponding permission group
        groupedCommands[command.permission].push(command);
    });

    return groupedCommands;
}

export function formatCommandGroup(permission: Permission, commands: CommandHandler[]): string {
    if (commands.length === 0) return '';
    const header = `${PERMISSION_LABEL[permission]}:\n`;
    const list = commands.map((cmd) => `  • *${cmd.command}*: ${cmd.description}`).join('\n');
    return `${header}${list}\n\n`;
}
