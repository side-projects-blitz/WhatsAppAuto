import { Message } from "whatsapp-web.js";
import { sendSpam } from "../commands/spam";
import {
  handleAddToHiatus,
  handleHiatusMe,
  handleRemoveFromHiatus,
  handleUnhiatusMe,
} from "../commands/hiatus";
import { handleHelp } from "../commands/help";
import { commands } from "../data/commands";
import { handleKick } from "../commands/kick";
import { handleKiss } from "../commands/kiss";
import { handleHug } from "../commands/hug";
import { handleAddPoints, handleAddPointsTemplate } from "../commands/points";
import { handleCountMyMessages } from "../commands/count-messages";

export async function onMessageCreate(message: Message) {
  const chat = await message.getChat();
  if (!chat.isGroup) return;

  const body = message.body.toLowerCase();

  if (message.fromMe) {
    if (body === commands.SPAM.command) return sendSpam(chat);
    if (body.startsWith(`${commands.HIATUS.command} `))
      return handleAddToHiatus(message);
    if (body.startsWith(`${commands.UNHIATUS.command} `))
      return handleRemoveFromHiatus(message);
    if (body === commands.HIATUSME.command)
      return handleHiatusMe(message, chat);
    if (body === commands.UNHIATUSME.command)
      return handleUnhiatusMe(message, chat);
    if (body === commands.COUNTMYMESSAGES.command)
      return handleCountMyMessages(message, chat);
    if (body === commands.ADDPOINTS.command)
      return handleAddPoints(message, chat);
    if (body.startsWith(`${commands.SETPOINTSTEMPLATE.command} `))
      return handleAddPointsTemplate(message, chat);
    //   if (body === "!start") return startDynamic(message, chat);
    //   if (body === "!end") return endDynamic(chat);
  }
  if (body === commands.KICK.command) return handleKick(message, chat);
  if (body === commands.KISS.command) return handleKiss(message, chat);
  if (body === commands.HUG.command) return handleHug(message, chat);
  if (body === commands.HELP.command) return handleHelp(message);
}
