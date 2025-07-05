import { client } from './client';
import { onAuthenticated } from './handlers/onAuthenticated';
import { onAuthFailure } from './handlers/onAuthFailure';
import { onMessageCreate } from './handlers/onMessageCreate';
import { onQR } from './handlers/onQR';
import { onReady } from './handlers/onReady';

client.on('qr', onQR);

client.on('ready', onReady);

client.on('authenticated', onAuthenticated);

client.on('auth_failure', onAuthFailure);

client.on('message_create', onMessageCreate);

client.initialize();
