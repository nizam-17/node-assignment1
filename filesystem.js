let fs = require('fs');
let fname = 'text.txt';

async function readFile(filename){
    try{
        let data = await fs.promises.readFile(filename, 'utf8');
        console.log(data);
    }catch(err){
        console.log(err);
    }
}

readFile(fname);