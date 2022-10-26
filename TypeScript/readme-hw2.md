# HW2 HowTo
_Erin Phillips | CSCI320-01 | hw2.tsc_
 
## Building the program:

### 1.  Imports:
    import * as fs from "fs";
    import {argv } from 'node:process';

### 2. Functions:
#### 2.1 
    function fileRead(file:string, num:number) {}
* Reads in the text file using the File Server module. Stores the contents in a 2D array. `arr2D:string[][] = [line #][line contents]`
* Parameters:
  * `file:string` = the name of the text file
  * `num:number` = the number that indicates what field the sort is based on

#### 2.2  
    function mergeSort(arr:any[]): any[] {}
* recursive function that splits the array until each contains only 1 element(1 array). Once base case is met, this function will call the `merge()` function to continue sorting.
  
#### 2.3 
    function merge(left: any[], right: any[]): any[] {}
* Merges the split elements and ompares the elements at the specified field. Pushes the lesser element first into the result array. 
* Parameters:
  * `left:any[]` = the 'left' cut of the original array 
  * `right:any[]` = the 'right' cut of the original array
* Returns a sorted array

### 3. Command line arguments:
* Command line arguments are stored in an array `argv[]`. The contents are as follows: 
  * `[exec path, file path, additional command line arguments, ...]`
* `argv[2]` and `argv[3]` accesses the command line arguments input by the user. 

***
## Running the program

`tsc filename.ts`

`node filename.js argument1 argument 2`

for example: To sort the file `SampleFile_A2.txt` on the 2nd field:
`tsc hw2.ts`

`node hw2.js SampleFile_A2.txt 1`

_note: the field indicies start at 0._

***
## Comments
* Figuring out how to pass the field argument into the merge() function was difficult. I originally had 3 seperate functions and passsed the field argument through each one. I discovered that I was losing the actual value of the field argument. 
  * Eventually I decided to nest the merge() and mergeSort() functions inside of the fileRead() function, so I could access the field value without passing it through as parameters and potentionally losing that value. 

* I cannot run the command `tsc filename.ts` in powershell, git bash, or the JavaScript debug termina. 
* Execution is successful in command prompt only. 
