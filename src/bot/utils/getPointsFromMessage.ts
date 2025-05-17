export function getPointsFromMessage(message: string): number[] {
    const resultados: number[] = [];

    const cleanedBody = message
        .replace(/@\d{5,}/g, '')
        .replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, '');

    // Buscar cadenas que parezcan números (con letras o separadores)
    const regex = /\b[\dOo.,]{1,}\b/g;
    const matches = cleanedBody.match(regex);

    if (matches) {
        for (let match of matches) {
            // Reemplazar letras 'o'/'O' por ceros
            match = match.replace(/[oO]/g, '0');

            // Eliminar separadores si están entre dígitos (miles: 1.000 o 1,000)
            match = match.replace(/(?<=\d)[.,](?=\d{3}\b)/g, '');

            // Si después de limpiar queda un número entero válido, lo agregamos
            if (/^\d+$/.test(match)) {
                const num = parseInt(match, 10);
                if (!(num > 1e8)) {
                    resultados.push(num);
                }
            }
        }
    }

    return resultados;
}

export function getPreviousPointsFromMessage(message: string): number {
    const allPoints: number[] = getPointsFromMessage(message);

    if (allPoints.length === 0) {
        return 0;
    } else {
        return Math.max(...allPoints);
    }
}
