import { executablePath } from 'puppeteer';
import { Client, LocalAuth } from 'whatsapp-web.js';

import { isLinux } from '@/utils/getOS';

export const client = new Client({
    authStrategy: new LocalAuth({ clientId: 'new-client' }),
    puppeteer: {
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        executablePath: isLinux ? '/usr/bin/chromium' : executablePath(),
    },
});
