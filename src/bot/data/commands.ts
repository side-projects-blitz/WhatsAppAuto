export const commands = {
  SPAM: {
    command: "!spam",
    description:
      "Envía un mensaje etiquetado a todos los miembros del grupo que no están en hiatus.",
  },
  HIATUS: {
    command: "!hiatus",
    description: "Añade a un usuario de tu selección al modo hiatus.",
  },
  UNHIATUS: {
    command: "!unhiatus",
    description: "Remueve a un usuario de tu selección del modo hiatus.",
  },
  HIATUSME: {
    command: "!hiatusme",
    description: "Te añade a ti mismo al modo hiatus.",
  },
  UNHIATUSME: {
    command: "!unhiatusme",
    description: "Te remueve a ti mismo del modo hiatus.",
  },
  COUNTMYMESSAGES: {
    command: "!countmymessages",
    description:
      "Cuenta los mensajes enviados por el usuario en el grupo o desde el mensaje que se envió el comando.",
  },
  SETPOINTSTEMPLATE: {
    command: "!setpointstemplate",
    description:
      "Establece el template de puntos para el grupo. Usa !setpointstemplate [template].",
  },
  ADDPOINTS: {
    command: "!sumarpuntos",
    description:
      "Suma los puntos del grupo desde el mensaje que se citó en el comando.",
  },
  KICK: {
    command: "!kick",
    description: "Le das una patada a un usuario del grupo.",
  },
  KISS: {
    command: "!kiss",
    description: "Le das un beso a un usuario del grupo.",
  },
  HUG: {
    command: "!hug",
    description: "Le das un abrazo a un usuario del grupo.",
  },
  HELP: {
    command: "!help",
    description: "Muestra la lista de comandos disponibles.",
  },
};
