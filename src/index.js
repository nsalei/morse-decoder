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
    let tens;
    let exprSplit = expr.match(/.{1,10}/g);
    let encodesResult  = [];
    let result = "";
    for (let i = 0; i < exprSplit.length; i++) {
      tens = Number(exprSplit[i]).toString().match(/.{1,2}/g);
      let encodes = "";
      for (let i = 0; i < tens.length; i++) {
        if (tens[i] === "10") {
          encodes += ".";
        } else if (tens[i] === "11") {
          encodes += "-";
        } else {
          encodes += " ";
        }
      }
      encodesResult.push(encodes);
    }
    
    for (let c = 0; c < encodesResult.length; c++) {
      for (let i = 0; i < Object.keys(MORSE_TABLE).length; i++) {
        let b = Object.keys(MORSE_TABLE)[i];
        if (encodesResult[c] === b) {
          result += Object.values(MORSE_TABLE)[i];
        } else if (encodesResult[c] === "  ") {
          result += " ";
        }
      }
    }
    
    result = result.replace(/ +/g, ' ').trim();
    
    return result;
}

module.exports = {
    decode
}