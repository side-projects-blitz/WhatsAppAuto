import WAWebJS from "whatsapp-web.js";

export const getIsAdmin = (message: WAWebJS.Message, chat: WAWebJS.Chat) => {
  // @ts-ignore
  const participants = chat.groupMetadata.participants;

  const participant = participants.find(
    (participant: any) => participant.id._serialized === message.author
  );

  if (!participant) return false;
  return participant.isAdmin || participant.isSuperAdmin;
};
