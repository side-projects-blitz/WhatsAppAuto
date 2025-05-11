import { Client, LocalAuth } from "whatsapp-web.js";
import { executablePath } from "puppeteer";

export const client = new Client({
  authStrategy: new LocalAuth({ clientId: "new-client" }),
  puppeteer: {
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    executablePath: executablePath(), 
  },
});
