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
    let SYM = {
        '10': '.',
        '11': '-',
        '**': ' ',
        '00': '',
    }
    let arr = [];
    for (let j = 0; j < expr.length; j += 10) {
        let s = expr.slice(j, j + 10);
        arr.push(s);
    }
    arr = arr.map((elem) => {
        let arr1 = [];
        for (let i = 0; i < elem.length; i += 2) {
            let m = elem.slice(i, i+2);
            arr1.push(m);
        }
        return arr1;
    });
    arr = arr.map(comp => comp.map(el => SYM[el]))
             .map(el => el.join(''))
             .map(elem => MORSE_TABLE[elem]);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == undefined) {
            arr[i] = ' ';
        }
    }
    arr = arr.join('');
    return arr;
}

module.exports = {
    decode
}