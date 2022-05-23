const req = require('./modules/readInput');

let skinArray = [];

const main = async() =>
{
    await req.getSkins("sampleInput2.txt").then((data) =>{
        skinArray = data;
    });
    console.log(skinArray[0]);
}

main();