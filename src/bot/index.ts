import { client } from './client';
import { onMessageCreate } from './handlers/onMessageCreate';
import { onQR } from './handlers/onQR';

client.on('qr', onQR);

client.on('ready', () => {
    console.log('Bot conectado');
});

client.on('authenticated', () => {
    console.log('Se inició sesión correctamente');
});

client.on('auth_failure', (msg) => {
    console.error('Falló la autenticación', msg);
});

client.on('message_create', onMessageCreate);

client.initialize();
