export const getRandomHitMessage = (fromMention: string, quotedMention: string) => {
    const messages = [
        `En un descuido @${fromMention} pateó a @${quotedMention}`,
        `@${fromMention} le tiró un codazo a @${quotedMention} y lo mandó directo a la banca`,
        `@${quotedMention} tropezó misteriosamente… justo después de que @${fromMention} estirara la pierna`,
        `@${fromMention} le pegó una piña virtual a @${quotedMention}`,
        `@${quotedMention} fue alcanzado por una chancla cortesía de @${fromMention} 🩴`,
        `@${fromMention} hizo un combo de puño y patada y @${quotedMention} no sobrevivió el round`,
    ];

    return messages[Math.floor(Math.random() * messages.length)];
};

export const getRandomKissMessage = (fromMention: string, quotedMention: string) => {
    const messages = [
        `@${fromMention} se acercó lentamente… y le dio un beso a @${quotedMention}`,
        `@${fromMention} le robó un beso a @${quotedMention}`,
        `@${quotedMention} acaba de ser besado con intensidad por @${fromMention}.`,
        `@${fromMention} besó a @${quotedMention}`,
        `@${quotedMention} fue víctima de un ataque de amor espontáneo de @${fromMention}`,
    ];

    return messages[Math.floor(Math.random() * messages.length)];
};

export const getRandomDryHugMessage = (fromMention: string, quotedMention: string) => {
    const messages = [
        `@${fromMention} abrazó a @${quotedMention}. Fue... un gesto, supongo.`,
        `@${quotedMention} recibió un abrazo de @${fromMention}. No pidan contexto.`,
        `@${fromMention} se acercó, abrazó a @${quotedMention} y se alejó sin decir nada.`,
        `@${fromMention} abrazó a @${quotedMention}. Nadie entendió por qué.`,
        `@${quotedMention} fue abrazado por @${fromMention}. Incómodo silencio después.`,
        `@${fromMention} aguantó el asco y abrazó a @${quotedMention}.`,
        `@${quotedMention} recibió un abrazo protocolar de @${fromMention}.`,
        `@${fromMention} abrazó a @${quotedMention}. Ya está, no exageren.`,
    ];

    return messages[Math.floor(Math.random() * messages.length)];
};

export const getUnimplementedCommandMessage = () => {
    const messages = [
        `Comando no disponible... cuando esté listo te llamamos 📞`,
        `El desarrollador no cobra lo suficiente para implementar eso`,
        `Ese comando está... en "planeación" desde 2024`,
        `Claro que sí, campeón, muy pronto lo tendrás`,
        `Ese comando no está listo, pero soñar es gratis ✨`,
        `Tntento interesante... pero no, no existe ese comando 🚫`,
        `Si escribes más fuerte tal vez lo programen más rápido 🧠💥`,
        `Este bot no hace milagros. Aún. 🔮`,
    ];

    return messages[Math.floor(Math.random() * messages.length)];
};

export const getNoPermissionCommandMessage = () => {
    const messages = [
        `Qué lindo que lo intentaste, pero no tienes permiso`,
        `Este comando no es para gente como tú`,
        `Acceso denegado. Vuelve pronto con un mejor plan`,
        `Lo siento, reservado para gente importante`,
        `Si fueras admin podrías usarlo. Pero no lo eres.`,
        `Acceso denegado. Puedes presentar una queja con el jefe`,
        `Este comando te queda grande por ahora 🚫`,
    ];

    return messages[Math.floor(Math.random() * messages.length)];
};
