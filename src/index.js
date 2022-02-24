const MORSE_TABLE = {
    'dashed': {
        '11101010': 'b',
        '11101110': 'c',
        '111010': 'd',
        '111110': 'g',
        '111011': 'k',
        '1111': 'm',
        '1110': 'n',
        '111111': 'o',
        '11111011': 'q',
        '11': 't',
        '11101011': 'x',
        '11101111': 'y',
        '11111010': 'z',
        '1110101010': '6',
        '1111101010': '7',
        '1111111010': '8',
        '1111111110': '9',
        '1111111111': '0',
        '**********': ' '
    },
    'dotted': {
        '1011': 'a',
        '10': 'e',
        '10101110': 'f',
        '10101010': 'h',
        '1010': 'i',
        '10111111': 'j',
        '10111010': 'l',
        '10111110': 'p',
        '101110': 'r',
        '101010': 's',
        '101011': 'u',
        '10101011': 'v',
        '101111': 'w',
        '1011111111': '1',
        '1010111111': '2',
        '1010101111': '3',
        '1010101011': '4',
        '1010101010': '5'
    }
};

function decode(expr) {
    let string = expr.match(/.{1,10}/g);
    let codekey = '';
    let decode = '';

    for ( let char of string ) {
        let i = 0;
        for ( let symb of char ) {
            if (symb === '*') {
                codekey = codekey + symb;
            } else if ((symb === '1') || ((symb === '1') && (char[i + 1] === '0'))) {
                codekey = codekey + symb;
            } else if ((symb === '0') && (char[i - 1] === '1')) {
                codekey = codekey + symb;
            } else if (char[i + 1] === undefined) {
                break;
            }

            i++;
        }
        if (codekey[1] === '1' || codekey[1] === '*') {
            decode = decode + MORSE_TABLE.dashed[codekey];
        } else if (codekey[1] === '0') {
            decode = decode + MORSE_TABLE.dotted[codekey];
        };
        codekey = '';
    }

    return decode;
}

module.exports = {
    decode
}