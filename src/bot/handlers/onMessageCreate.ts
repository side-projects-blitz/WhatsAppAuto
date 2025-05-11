import { Message } from "whatsapp-web.js";
import { commands } from "../data/commands";
import { getHasPermission } from "../utils/getHasPermission";

export async function onMessageCreate(message: Message) {
  const chat = await message.getChat();
  if (!chat.isGroup) return;

  const body = message.body.toLowerCase();

  for (const { check, run, permission } of Object.values(commands)) {
    if (check(body)) {
      const hasPerm = await getHasPermission(message, chat, permission);
      if (!hasPerm) {
        await message.reply("❌ No tienes permiso para usar este comando.");
        return;
      }
      return run(message, chat);
    }
  }

  //   if (body === "!start") return startDynamic(message, chat);
  //   if (body === "!end") return endDynamic(chat);
}
