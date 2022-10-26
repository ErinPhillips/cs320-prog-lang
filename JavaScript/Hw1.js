/*
Erin Phillips
CSCI 320
HW1.js

This program reads a text file (taken as a string argument) that
contains two fields delimited by commas. It will then returns the 
sorted text file in an array using the bubbleSort algorithm.

I certify this work is entirly my own. 
*/


// File Server module
const fs = require('fs')

function fileRead(file) {
    // reads contents from text file
    const contents = fs.readFileSync(file, 'utf8')
    console.log(`\nOriginal file contents:\n${contents}\n`)

    // split contents by new line and store in array
    let arr = contents.split(/\r?\n/)
    var n = arr.length
    var i, j

    // bubbleSort algorithm
    for (i = 0; i < n; i++) {
        for (j = 0; j < (n - 1 - i); j++) {
            if (arr[j].codePointAt(0) > arr[j + 1].codePointAt(0)) {
                // if element at current index is larger than next, 
                // values are swapped
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp   
            } 
        }
    }
    // Print the contents of the sorted array
    console.log('Sorted file contents:\n')
    for (i = 0; i < n; i++) {
        console.log(arr[i])
    }
}   

// driver for calling function
fileRead('HW1_SampleFile.txt')
