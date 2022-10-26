/*
Erin Phillips
CSCI 320
HW2.ts

This program accepts two command line arguments. The program will read in
the text file specified as the first command line argument, and sort the 
file on the field number specified as the second command line argument.
Sorting algorithim uses Merge Sort. 

I certify this work is entirely my own. 
*/
import * as fs from "fs";
import {argv } from 'node:process';

/*
@params:
file:string = the name of the text file
num:number = the number that indicates what field the sort is based on
@returns: void - will print the sorted contents to the console       
*/
function fileRead(file:string, num:number): void {

    // reads contents from text file
    const contents:string = fs.readFileSync(file, 'utf8');
    console.log(`\nOriginal file contents:\n\n${contents}`);

    // split contents by new line and store in array
    let arr:string[] = contents.split(/\r?\n/);
    // initialize '2D' array. [line #][line contents]. Inner contents split by comma
    let arr2D:string[][] = [];
    arr.forEach((val) => {
        arr2D.push(val.split(/, /));
    })

     // throws error message if num is greater than the field length of the lines in the file. 
     if(num >= arr2D[0].length) {
        throw new Error(`Field index out of bounds. Please enter a number from 0 to ${arr2D[0].length}`);
    }
                
    /*
    recursive function that splits the array until each contains
    only 1 element(1 array). Once base case is met, this function will call the merge() function to continue sorting. 
    @params: arr:any[] = an array
    @returns: an array
    */
    function mergeSort(arr:any[]): any[] {
        // if the array contains only 1 element, return that array. 
        if(arr.length <= 1) { return arr; }
        // the midpoint of the array
        var half:number = Math.ceil(arr.length/2);
        // the results of splitting the array in half
        var left:any[] = arr.slice(0, half);
        var right:any[] = arr.slice(half);
        // continue to split each side until only 1 element remains
        left = mergeSort(left);
        right = mergeSort(right);
        
        //return the result of calling merge on the left and right cuts of the array;
        return merge(left, right);
    }

    /*
    Merges the split elements. Compares the elements at the specified
    field and pushes the lesser element first. 
    @params: left:any[], right:any[] = the 'left' and 'right' cuts of the original array
    @returns: a sorted array
    */
    function merge(left: any[], right: any[]): any[]{
        let resultArr:any[] = []; // to store the results
        let leftIndex = 0, rightIndex = 0; // index value of left and right cuts
    
        while(leftIndex < left.length || rightIndex < right.length) {
            // accessing the elements from the left and right cuts that
            // we want to compare
            let leftElement = left[leftIndex];
            let rightElement = right[rightIndex];

            // the left element exists 
            if(leftElement != undefined) { 
                // right element does not exist
                if(rightElement == undefined) { 
                    resultArr.push(leftElement);
                    leftIndex++;
                // right element exists
                }else {
                    // left element is less that right element. Accesses the specified
                    // field we want to compare on that is within the each element. 
                    if(leftElement[num] < rightElement[num]) {
                        resultArr.push(leftElement);
                        leftIndex++;
                    // left element is greater than right element. Accesses the specified
                    // field we want to compare on that is within the each element
                    }else if(leftElement[num] > rightElement[num]) {
                        resultArr.push(rightElement);
                        rightIndex++;
                    // The first value of the specified field within elements are equal. Compares
                    // the next value of the specified field within the elements. 
                    }else if(leftElement[num + 1] < rightElement[num + 1]) {
                            resultArr.push(leftElement);
                            leftIndex++;
                        // right element is greater than the left element
                        }else {
                            resultArr.push(rightElement);
                            rightIndex++;
                        }}}
            // right element exists
            if(rightElement != undefined) {
                // left element does not exist
                if(leftElement == undefined) {
                    resultArr.push(rightElement);
                    rightIndex++;
                }}}
            return resultArr;
    }
    let sortedArr = mergeSort(arr2D);
    // Print the contents of the sorted array
    console.log('\nSorted file contents:\n')
    sortedArr.forEach((val) => { console.log(val); })
}
// driver code
const fileName = argv[2];
const num = parseInt(argv[3]);

fileRead(fileName, num);
