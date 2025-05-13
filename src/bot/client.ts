import { Client, LocalAuth } from "whatsapp-web.js";

export const client = new Client({
  authStrategy: new LocalAuth({ clientId: "new-client" }),
  puppeteer: {
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    executablePath: '/usr/bin/chromium'
  },
});
