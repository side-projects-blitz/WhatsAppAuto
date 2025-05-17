import { Permission } from '../../enums/permission.enum';

export const PERMISSION_LABEL: Record<Permission, string> = {
    [Permission.ADMIN]: '👑 *Administradores*',
    [Permission.EVERYONE]: '👥 *Todos*',
    [Permission.ME]: '🙋 *Solo Ale*',
};

export const TITLE_LABEL = '*📜 Lista de comandos disponibles:*';
