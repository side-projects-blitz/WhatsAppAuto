import { CommandLabels } from '../enums/commands.enum';

export type CommandValidationType = 'full' | 'tag' | 'reply' | 'newLine';

type CommandValidationProps = {
    body: string;
    mentions?: string[];
    matchText: string;
    validationType: CommandValidationType[];
};

type CommandValidationReturn = {
    isValid: boolean;
    isFull: boolean;
    isTag: boolean;
    isReply: boolean;
    isNewLine: boolean;
    errors: string[];
};

export function commandValidation({
    body,
    mentions = [],
    matchText,
    validationType,
}: CommandValidationProps): CommandValidationReturn {
    let isValid = true;
    const errors: string[] = [];

    let isFull = false;
    const isTag = false;
    const isReply = false;
    const isNewLine = false;

    validationType.forEach((type) => {
        if (type === 'full') {
            const result = fullValidation(body, matchText);
            isValid = isValid && result;
            isFull = result;
            return;
        }

        if (type === 'tag') {
        }
    });

    return {
        isValid,
        isFull,
        isTag,
        isReply,
        isNewLine,
        errors,
    };
}

export function fullValidation(body: string, matchText: string) {
    return body === matchText;
}

export function tagValidation(body: string, matchText: string, mentions: string[]) {
    const isValid = true;
    const errors = [];

    const hasFormat = body.startsWith(matchText);
    const words = body.split(' ');
    const hasMentions = mentions.length > 0;

    console.log('words', words);
    console.log('hasMentions', hasMentions);
}

/**
 * Determines if the provided text is a command.
 *
 * A command is defined as any string that starts with the '!' character.
 *
 * @param text - The text string to evaluate.
 * @returns `true` if the text starts with '!', otherwise `false`.
 */
export const isCommand = (text: string) => {
    return /^!.*/.test(text);
};

/**
 * Checks if a given command string matches any of the valid commands.
 *
 * The function uses a regular expression to determine if the command starts with
 * any of the valid commands, followed by a word boundary and optionally any additional text.
 * The match is case-insensitive.
 *
 * @param command - The input command string to validate.
 * @param validCommands - An array of valid command strings to check against.
 * @returns `true` if the command matches any valid command pattern, otherwise `false`.
 */
export const isValidCommand = (command: string, validCommands: CommandLabels[]) => {
    const validCommandExpresion = (text: string) => new RegExp(`^${text}\\b(?:\\s+.*)?`, 'i');

    const foundCommand = validCommands.find((validCommand) => {
        const regex = validCommandExpresion(validCommand);
        return regex.test(command);
    });

    return {
        isValid: !!foundCommand,
        command: foundCommand,
    };
};

/**
 * Generates a regular expression to match a command at the start of a string.
 *
 * @param command - The command string to match at the beginning of the input.
 * @returns A RegExp that matches the command followed by a word boundary and optional whitespace and arguments.
 *
 * @example
 * ```typescript
 * const regex = regexIsCommand('!start');
 * regex.test('!start'); // true
 * regex.test('!start now'); // true
 * regex.test('hello !start'); // false
 * ```
 */
export const isCommandWithMention = (command: string) => {
    return new RegExp(`^${command}\\b\\s+@\\w+`);
};
