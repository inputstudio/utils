/**
 * Function to hide some characters in a string
 * @param {string} value - The former string
 * @param {string} char - The character which will be used as replacement for the real ones
 * @param {number} nbChars - The number of chars which should be visible
 * @param {number} from - start | end - The starting position from where the chars should be visible
 *
 * @return {string} secret
 */
export function secret(value: string, char: string = '*', nbChars: number = 1, from: string = 'start'): string {
  if (!value || value.length < 1) {
    throw new Error('The string value should have a least one character');
  }

  if (char.length > 1) {
    throw new Error('The char should be only one character');
  }

  if (nbChars > value.length) {
    throw new Error('The number of characters to extract from the former string exceed the string lenght');
  }

  if (!['start', 'end'].includes(from)) {
    throw new Error("from argument should be either 'start' or 'end'");
  }

  let secret: string = '';
  let visiblePart: string = '';
  let cursorPosition: number;

  // Extract the part which should be visible on the secret string generated
  if (from === 'start') {
    visiblePart = value.slice(0, nbChars);
    cursorPosition = 0;
  } else {
    visiblePart = value.slice(-nbChars);
    cursorPosition = value.length - nbChars;
  }

  // Generate a string which has the same lenght as the former one but contains only the hidden char
  for (let i = 0; i < value.length; i++) {
    secret += char;
  }

  let replacedCharsCounter: number = 0;

  const secretArray: string[] = secret.split('');

  do {
    secretArray[cursorPosition] = visiblePart.charAt(replacedCharsCounter);
    replacedCharsCounter++;
    cursorPosition++;
  } while (replacedCharsCounter < nbChars);

  secret = secretArray.join('');

  return secret;
}
