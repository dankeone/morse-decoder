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
    let str = '';
    let decodeStr = ''; 
    for (let i = 0; i < expr.length; i += 10) {
        let ex = expr.slice(i, i + 10);
        if (ex === '**********') decodeStr += ' '; else{
            for (let j = 0; j < ex.length; j += 2){
                if (ex[j] + ex[j+1] === '10') str += '.';
                else if (ex[j] + ex[j+1] === '11') str += '-';
            }

            decodeStr += MORSE_TABLE[str];
            str = '';
        }
    }
  
    return(decodeStr);
  }

module.exports = {
    decode
}
