import './bot'

// import { Client, LocalAuth, Message } from "whatsapp-web.js";

// interface Contact {
//   id: string;
//   name: string;
//   number: string;
// }

// interface Chat {
//   id: string;
//   contacts: Contact[];
// }

// const client = new Client({
//   authStrategy: new LocalAuth({ clientId: "new-client" }),
// });

// let dynamicRunning = false;
// let chats: Chat[] = [];
// let hiatusList: string[] = [];

// client.on("message_create", async (message: Message) => {
//   const chat = await message.getChat();
//   if (chat.isGroup) {
//     if (message.body.toLowerCase() === "!start") {
//       chats = [];
//       dynamicRunning = true;
//       chat.sendMessage("La dinámica ha comenzado. Responde ahora.");

//       const currentChat = chats.find((a) => a.id === chat.id._serialized);

//       if (currentChat) {
//         chat.sendMessage("Ya hay una dinámica en curso.");
//       } else {
//         chats.push({
//           id: chat.id._serialized,
//           contacts: [],
//         });
//       }
//     }

//     if (message.body.toLowerCase() === "!end") {
//       dynamicRunning = false;
//       const answers = chats.find((a) => a.id === chat.id._serialized);

//       if (!answers) {
//         chat.sendMessage("No hubo participantes.");
//         return;
//       } else {
//         const result = answers.contacts.map(
//           (contact, i) =>
//             `${i + 1}. @${contact.number} -> ${2000 - i * 100} puntos`
//         );
//         chat.sendMessage(`Resultados:\n${result}`);
//       }
//     }
//   }
// });

// client.on("message", async (message: Message) => {
//   if (message.body == "!ping") {
//     message.reply("pong");
//   }

//   const contact = await message.getContact();
//   const name = contact.pushname || contact.number;

//   console.log("------------------------------");
//   console.log("Mensaje propio: ", message.fromMe);
//   console.log("Mensaje de: ", name, "\n Contenido: ", message.body);
//   console.log("------------------------------");

//   if (dynamicRunning && !message.fromMe) {
//     const chat = await message.getChat();
//     const chatId = chat.id._serialized;

//     const answers = chats.find((a) => a.id === chatId);

//     if (
//       answers &&
//       !answers.contacts.map((a) => a.id === contact.id._serialized)
//     ) {
//       answers.contacts.push({
//         id: contact.id._serialized,
//         name,
//         number: contact.number,
//       });
//       console.log(`${name} respondió`);
//     }
//   }
// });

// client.initialize();
