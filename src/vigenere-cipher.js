const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(modification) {
    this.modification = modification ;
  }

  encrypt(message, key) {
    if (message == null || key == null) throw Error();
    const LATIN_LETTERS = /[A-Za-z]/;
    const ALPHABET_LENGTH = 26;
    const FIRST_LETTER_CODE = 'A'.charCodeAt();
    let codingLetterCounter = 0;

    message = message.toUpperCase().split('');
    key = key.toUpperCase();

    message.forEach((element, index) => {
      if (LATIN_LETTERS.test(element)) {
        message[index] = String.fromCharCode(
          ((element.charCodeAt() - FIRST_LETTER_CODE
            + (key[codingLetterCounter % key.length].charCodeAt() - FIRST_LETTER_CODE))
            % ALPHABET_LENGTH)
          + FIRST_LETTER_CODE);
        codingLetterCounter++;
      }
    });
    return this.modification === false ? message.reverse().join('') : message.join('');
  }
  decrypt(message, key) {
    if (message == null || key == null) throw Error();
    const LATIN_LETTERS = /[A-Za-z]/;
    const ALPHABET_LENGTH = 26;
    const FIRST_LETTER_CODE = 'A'.charCodeAt();
    let codingLetterCounter = 0;

    message = message.toUpperCase().split('');
    key = key.toUpperCase();

    message.forEach((element, index) => {
      if (LATIN_LETTERS.test(element)) {
        message[index] = String.fromCharCode(
          ((element.charCodeAt() - FIRST_LETTER_CODE
            + (ALPHABET_LENGTH - (key[codingLetterCounter % key.length].charCodeAt() - FIRST_LETTER_CODE)))
            % ALPHABET_LENGTH)
          + FIRST_LETTER_CODE);
        codingLetterCounter++;
      }
    });
    return this.modification === false ? message.reverse().join('') : message.join('');
  }
}

module.exports = VigenereCipheringMachine;