import { Client, LocalAuth } from 'whatsapp-web.js';

import { isLinux } from '../utils/getOS';

export const client = new Client({
    authStrategy: new LocalAuth({ clientId: 'whatsapp-client' }),
    ...(isLinux && {
        puppeteer: {
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
            executablePath: '/usr/bin/chromium',
        },
    }),
});
