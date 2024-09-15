function main() {
    // write your code here.
    // call functions `nextString`, `nextFloat` and `nextInt` 
    // to read the next token of input (ignoring whitespace)
    // Alternatively, you can create your own input parser functions
    // use console.log() to write to stdout

    // var i = nextInt();
    // var s = nextString();
    
    // var c = nextChar();
    // var f = nextFloat();
    const input1 = nextInt();
    let input2 = nextInt();
    let sentence = "";
        for(let i = 0; i < parseInt(input1); i++){
         let possibleText = nextString();
        while(!isNumber(possibleText)){
                sentence += " " + possibleText;
                console.log("possibleText",possibleText)
                possibleText = nextString();
                
        }
        const shiftValue = input2 > 25 || input2 < 1?input2%25: input2;
        console.log(check(sentence,parseInt(shiftValue)))
        sentence = "";


        }
    
}
function check(sentence, shift) {
    const regex = /\bthe\b/;
    if (regex.test(sentence)) {
        return Array.from(sentence).map(char => encode(char, shift)).join('');
    } else {
        return Array.from(sentence).map(char => encode(char, -shift)).join('');
    }
}


function encode(letter, shift) {
    if ('a' <= letter && letter <= 'z') {
        let normalize = letter.charCodeAt(0) - 'a'.charCodeAt(0);
        let snormalize = normalize + (26 - shift);
        let msnormalize = snormalize % 26;
        let final = msnormalize + 'a'.charCodeAt(0);
        return String.fromCharCode(final);
    }
    return letter;
}
function isNumber(str) {
  return !isNaN(Number(str));
}

// default parsers for JS.
function nextInt() {
    return parseInt(nextString());
}

function nextFloat() {
    return parseFloat(nextString());
}

function nextString() {
    var next_string = "";
    clearWhitespaces();
    while (input_cursor < input_stdin.length && !isWhitespace(input_stdin[input_cursor])) {
        next_string += input_stdin[input_cursor];
        input_cursor += 1;
    }
    return next_string;
}

function nextChar() {
    clearWhitespaces();
    if (input_cursor < input_stdin.length) {
        return input_stdin[input_cursor++];
    } else {
        return '\0';
    }
}

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_cursor = 0;
process.stdin.on('data', function (data) { input_stdin += data; });
process.stdin.on('end', function () { main(); });

function isWhitespace(character) {
    return ' \t\n\r\v'.indexOf(character) > -1;
}

function clearWhitespaces() {
    while (input_cursor < input_stdin.length && isWhitespace(input_stdin[input_cursor])) {
        // ignore the next whitespace character
        input_cursor += 1;
    }  
}