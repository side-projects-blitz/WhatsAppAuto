import WAWebJS from 'whatsapp-web.js';

import { Permission } from '../enums/permission.enum';

export type RunCommand = {
    message: WAWebJS.Message;
    chat: WAWebJS.Chat;
};

export type CommandHandler = {
    command: string;
    description: string;
    permission: Permission;
    check: (body: string) => boolean;
    run: ({ message, chat }: RunCommand) => Promise<void>;
};
