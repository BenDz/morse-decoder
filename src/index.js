const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    var characters = '',
        lettersSplit = expr.match(/.{1,10}/g);
    lettersSplit.forEach(function(letter) {
      if(letter === '**********') {
        characters += ' ';
      } else {
        var symboleSplit = letter.match(/.{1,2}/g),
            symboleConcat = '';
        symboleSplit.forEach(function(symbol) {
          if(symbol !== '00') {
            symboleConcat += (symbol === '10') ? '.' : '-';
          }
        })
        characters += MORSE_TABLE[symboleConcat];
      }
    })
    return characters;
}

module.exports = {
    decode
}