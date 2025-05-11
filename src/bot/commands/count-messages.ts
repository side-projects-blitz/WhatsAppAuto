import WAWebJS from "whatsapp-web.js";

// TODO: Only recognize messages from the same device.
export const handleCountMyMessages = async (
  message: WAWebJS.Message,
  chat: WAWebJS.Chat
) => {
  let quotedMessage: WAWebJS.Message | undefined = undefined;
  if (message.hasQuotedMsg) {
    quotedMessage = await message.getQuotedMessage();
  }

  const chatMessages = await chat.fetchMessages({
    limit: 50000,
  });

  let messagesCount: number = 0;

  const myMessages = chatMessages.filter((msg) => msg.from === message.from);

  if (quotedMessage) {
    messagesCount = myMessages.filter(
      (msg) => msg.timestamp >= quotedMessage.timestamp
    ).length;
  } else {
    messagesCount = myMessages.length;
  }

  message.reply(`Has enviado ${messagesCount} mensajes en este grupo.`);
};
