import WAWebJS from "whatsapp-web.js";
import { getRandomHitMessage } from "../utils/getRandomAction";
import { getMentionInfoFromQuote } from "../utils/getMentionInfo";

export const handleKick = async (
  message: WAWebJS.Message,
  chat: WAWebJS.Chat
) => {
  const info = await getMentionInfoFromQuote(message);

  if (!info) {
    message.reply("❌ Responde el mensaje de alguien que quieras patear");
    return;
  }

  const { fromJid, quotedJid, fromMention, quotedMention } = info;
  const messageText = getRandomHitMessage(fromMention, quotedMention);

  chat.sendMessage(messageText, {
    mentions: [fromJid, quotedJid],
  });
};
