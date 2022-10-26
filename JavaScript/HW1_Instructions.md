# assignment1.js instructions

## Include the File Server module 

Allows you to work with the file system on your pc 

     1. 'var fs = require('fs')'


## Create Function

I did this so you could simply call the function with different filenames

     1.'function readFile(filename) {}'

### Read file
Inside the function read the txt file and save it to a variable 

     1.'const contents = fs.readFileSync(filename, 'utf-8')'

### Create array
Use split and split them via newline

     1. 'let arr1 = contents.split(/\r?\n/)'

## Use bubblesort to sort each element/line in the array
     1. 'for(var i = 0; i < arr1.length; i++)' 
     2. 'for(var j = 0; j < ( arr1.length - i -1 ); j++)'

I used charCodeAt() to compare the unicode values 

     1. 'if(arr1[j].charCodeAt(0) > arr1[j+1].charCodeAt(0))'

You need a temp variable to hold the value then you swap them 

     1. 'var temp = arr1[j]'
     2. 'arr1[j] = arr1[j + 1]'
     3. 'arr1[j+1] = temp'

### Print the now sorted array
'console.log(arr1)'


## Call the function using the txt files name
'readFile('dogs.txt')'