// utils/getMentionInfo.ts
import WAWebJS from "whatsapp-web.js";

export type MentionInfo = {
  fromJid: string;
  quotedJid: string;
  fromMention: string;
  quotedMention: string;
};

export const getMentionInfoFromQuote = async (
  message: WAWebJS.Message
): Promise<MentionInfo | null> => {
  if (!message.hasQuotedMsg) {
    return null;
  }

  const quotedMessage = await message.getQuotedMessage();

  const fromJid = message.author ?? message.from;
  const quotedJid = quotedMessage.author ?? quotedMessage.from;

  return {
    fromJid,
    quotedJid,
    fromMention: fromJid.split("@")[0],
    quotedMention: quotedJid.split("@")[0],
  };
};
