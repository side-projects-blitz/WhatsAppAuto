import WAWebJS from "whatsapp-web.js";
import { commands } from "../data/commands";

export const handleHelp = async (message: WAWebJS.Message) => {
  let helpMessage = "*Lista de comandos disponibles:*\n\n";
  for (const key in commands) {
    const { command, description } = commands[key as keyof typeof commands];
    helpMessage += `*${command}* —> ${description}\n`;
  }

  message.reply(helpMessage);
};
