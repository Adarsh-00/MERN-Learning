const readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);

let inputs = [];

rl.on('line', function(line) {
    console.log(line);
    // let str = line.split(' ');
    // console.log(str);
    inputs.push(line);
});

rl.on('close', function(){
    console.log(inputs[0]);
    process.exit(0);
});