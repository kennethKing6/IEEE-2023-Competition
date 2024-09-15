function main() {
    // write your code here.
    // call functions `nextString`, `nextFloat` and `nextInt` 
    // to read the next token of input (ignoring whitespace)
    // Alternatively, you can create your own input parser functions
    // use console.log() to write to stdout

    // var c = nextChar();
    // var f = nextFloat();
    
    const array = [];
    const length = nextInt();
    for(let i = 0; i < length; i++)
        array.push(nextInt())

  console.log(sortSubArray(array))
}

function sortSubArray(array = []){
    let firstNumber;
    const result = [[]]
    let cursor = 0;

   for(let i = cursor; i < array.length; i++){
        result[cursor].push(array[i]) // gets the first number of the subarray
        firstNumber = array[i];

        for(let j = i + 1; j < array.length; j++){
            if(array[j] < firstNumber){
                result[cursor].push(array[j])
            }else if(array[j] > firstNumber){
              result.push([array[j]]);
              firstNumber = array[j]
              ++cursor;
              i = cursor;
              continue;
            }else{
                result.push([array[j]]);
                firstNumber = array[j]
                ++cursor;
                i = cursor;
                continue;
            }
        }

        break;
   }
    return result.length;
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