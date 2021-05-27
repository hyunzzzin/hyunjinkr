
const readline = require('readline');

const readtext = readline.createInterface({input:process.stdin,ouput:process.stdout});


readtext.on('line',(line) => {
    const input = line.split(' ');
    const res = Number(input[0]) + Number(input[1]);
    console.log(res);

    readtext.close();
}).on("close", () => {
    process.exit();
});
