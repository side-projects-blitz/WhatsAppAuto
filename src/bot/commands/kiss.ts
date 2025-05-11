import WAWebJS from "whatsapp-web.js";
import { getMentionInfoFromQuote } from "../utils/getMentionInfo";
import { getRandomKissMessage } from "../utils/getRandomAction";

export const handleKiss = async (
  message: WAWebJS.Message,
  chat: WAWebJS.Chat
) => {
  const info = await getMentionInfoFromQuote(message);

  if (!info) {
    message.reply("❌ Responde un mensaje de alguien para darle un beso");
    return;
  }

  const { fromJid, quotedJid, fromMention, quotedMention } = info;
  const messageText = getRandomKissMessage(fromMention, quotedMention);

  chat.sendMessage(messageText, {
    mentions: [fromJid, quotedJid],
  });
};
