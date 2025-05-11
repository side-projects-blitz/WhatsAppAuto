import { handleCountMyMessages } from "../commands/count-messages";
import { handleHelp } from "../commands/help";
import {
  handleAddToHiatus,
  handleHiatusMe,
  handleRemoveFromHiatus,
  handleUnhiatusMe,
} from "../commands/hiatus";
import { handleHug } from "../commands/hug";
import { handleKick } from "../commands/kick";
import { handleKiss } from "../commands/kiss";
import { handleAddPoints, handleAddPointsTemplate } from "../commands/points";
import { sendSpam } from "../commands/spam";
import { Commands } from "../enums/commands.enum";
import { Permission } from "../enums/permission.enum";
import { CommandHandler } from "../interfaces/command";

export const commands: Record<Commands, CommandHandler> = {
  [Commands.SPAM]: {
    command: "!spam",
    description:
      "Envía un mensaje etiquetado a todos los miembros del grupo que no están en hiatus.",
    permission: Permission.ADMIN,
    check: (body: string) => body === "!spam",
    run: async (_, chat) => sendSpam(chat),
  },
  [Commands.HIATUS]: {
    command: "!hiatus",
    description: "Añade a un usuario de tu selección al modo hiatus.",
    permission: Permission.ADMIN,
    check: (body: string) => body.startsWith(`!hiatus `),
    run: async (message, _) => handleAddToHiatus(message),
  },
  [Commands.UNHIATUS]: {
    command: "!unhiatus",
    description: "Remueve a un usuario de tu selección del modo hiatus.",
    permission: Permission.ADMIN,
    check: (body: string) => body.startsWith(`!unhiatus `),
    run: async (message, _) => handleRemoveFromHiatus(message),
  },
  [Commands.HIATUSME]: {
    command: "!hiatusme",
    description: "Te retira del spam general del grupo.",
    permission: Permission.EVERYONE,
    check: (body: string) => body === "!hiatusme",
    run: async (message, chat) => handleHiatusMe(message, chat),
  },
  [Commands.UNHIATUSME]: {
    command: "!unhiatusme",
    description: "Te agrega al spam general del grupo.",
    permission: Permission.EVERYONE,
    check: (body: string) => body === "!unhiatusme",
    run: async (message, chat) => handleUnhiatusMe(message, chat),
  },
  [Commands.COUNTMYMESSAGES]: {
    command: "!contarmismensajes",
    description:
      "Si respondes a un mensaje, cuenta los mensajes que has enviado desde entonces. \nSi no, cuenta los mensajes que has enviado desde siempre.",
    permission: Permission.ME,
    check: (body: string) => body === "!contarmismensajes",
    run: async (message, chat) => handleCountMyMessages(message, chat),
  },
  [Commands.SETPOINTSTEMPLATE]: {
    command: "!plantillapuntos",
    description:
      "Establece la plantilla de puntos para el grupo. \nEjemplo: \n!plantillapuntos \n[template].",
    permission: Permission.ADMIN,
    check: (body: string) => body.startsWith(`!plantillapuntos `),
    run: async (message, chat) => handleAddPointsTemplate(message, chat),
  },
  [Commands.ADDPOINTS]: {
    command: "!sumarpuntos",
    description:
    "Suma los puntos del grupo desde el mensaje que se citó en el comando.",
    permission: Permission.ADMIN,
    check: (body: string) => body === "!sumarpuntos",
    run: async (message, chat) => handleAddPoints(message, chat),
  },
  [Commands.KICK]: {
    command: "!kick",
    description: "Le das una patada a un usuario del grupo.",
    permission: Permission.EVERYONE,
    check: (body: string) => body === "!kick",
    run: async (message, chat) => handleKick(message, chat),
  },
  [Commands.KISS]: {
    command: "!kiss",
    description: "Le das un beso a un usuario del grupo.",
    permission: Permission.EVERYONE,
    check: (body: string) => body === "!kiss",
    run: async (message, chat) => handleKiss(message, chat),
  },
  [Commands.HUG]: {
    command: "!hug",
    description: "Le das un abrazo a un usuario del grupo.",
    permission: Permission.EVERYONE,
    check: (body: string) => body === "!hug",
    run: async (message, chat) => handleHug(message, chat),
  },
  [Commands.HELP]: {
    command: "!help",
    description: "Muestra la lista de comandos disponibles.",
    permission: Permission.EVERYONE,
    check: (body: string) => body === "!help",
    run: async (message, chat) => handleHelp(message),
  },
};
