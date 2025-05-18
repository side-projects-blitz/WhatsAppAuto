import WAWebJS from 'whatsapp-web.js';

import { Permission } from '../enums/permission.enum';

import { getIsAdmin } from './getIsAdmin';

export async function getHasPermission(
    message: WAWebJS.Message,
    chat: WAWebJS.Chat,
    permission: Permission
): Promise<boolean> {
    const isAdmin = getIsAdmin(message, chat);
    const isMe = message.fromMe;

    switch (permission) {
        case Permission.ADMIN:
            return isAdmin;
        case Permission.ME:
            return isMe;
        case Permission.EVERYONE:
            return true;
        default:
            return false;
    }
}
