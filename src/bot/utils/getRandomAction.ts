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
