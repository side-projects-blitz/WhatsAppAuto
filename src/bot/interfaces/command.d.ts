import WAWebJS from "whatsapp-web.js";
import { Permission } from "../enums/permission.enum";

export type CommandHandler = {
  command: string;
  description: string;
  permission: Permission;
  check: (body: string) => boolean;
  run: (message: WAWebJS.Message, chat: WAWebJS.Chat) => Promise<void>;
};

