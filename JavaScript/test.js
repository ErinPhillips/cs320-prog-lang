const fs = require('fs')

function fileRead(file) {
    // reads contents from text file
    const contents = fs.readFileSync(file, 'utf8')
    console.log(`\nOriginal file contents:\n${contents}\n`)

    // split contents by new line and store in array
    let arr = contents.split(/\r?\n/)
    console.log(arr)
    let arr2 = [];
    for(let i = 0; i < arr.length; i++) {
        arr2.push(arr[i].split(/, /))}
    
    console.log(arr2);

    console.log(arr2[2][2]);
    }
fileRead('SampleFile_A2.txt');
