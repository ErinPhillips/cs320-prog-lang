"use strict";
exports.__esModule = true;
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
var fs = require("fs");
var node_process_1 = require("node:process");
/*
@params:
file:string = the name of the text file
num:number = the number that indicates what field the sort is based on
@returns: void - will print the sorted contents to the console
*/
function fileRead(file, num) {
    // reads contents from text file
    var contents = fs.readFileSync(file, 'utf8');
    console.log("\nOriginal file contents:\n\n".concat(contents));
    // split contents by new line and store in array
    var arr = contents.split(/\r?\n/);
    // initialize '2D' array. [line #][line contents]. Inner contents split by comma
    var arr2D = [];
    arr.forEach(function (val) {
        arr2D.push(val.split(/, /));
    });
    // throws error message if num is greater than the field length of the lines in the file. 
    if (num >= arr2D[0].length) {
        throw new Error("Field index out of bounds. Please enter a number from 0 to ".concat(arr2D[0].length));
    }
    /*
    recursive function that splits the array until each contains
    only 1 element(1 array). Once base case is met, this function will call the merge() function to continue sorting.
    @params: arr:any[] = an array
    @returns: an array
    */
    function mergeSort(arr) {
        // if the array contains only 1 element, return that array. 
        if (arr.length <= 1) {
            return arr;
        }
        // the midpoint of the array
        var half = Math.ceil(arr.length / 2);
        // the results of splitting the array in half
        var left = arr.slice(0, half);
        var right = arr.slice(half);
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
    function merge(left, right) {
        var resultArr = []; // to store the results
        var leftIndex = 0, rightIndex = 0; // index value of left and right cuts
        while (leftIndex < left.length || rightIndex < right.length) {
            // accessing the elements from the left and right cuts that
            // we want to compare
            var leftElement = left[leftIndex];
            var rightElement = right[rightIndex];
            // the left element exists 
            if (leftElement != undefined) {
                // right element does not exist
                if (rightElement == undefined) {
                    resultArr.push(leftElement);
                    leftIndex++;
                    // right element exists
                }
                else {
                    // left element is less that right element. Accesses the specified
                    // field we want to compare on that is within the each element. 
                    if (leftElement[num] < rightElement[num]) {
                        resultArr.push(leftElement);
                        leftIndex++;
                        // left element is greater than right element. Accesses the specified
                        // field we want to compare on that is within the each element
                    }
                    else if (leftElement[num] > rightElement[num]) {
                        resultArr.push(rightElement);
                        rightIndex++;
                        // The first value of the specified field within elements are equal. Compares
                        // the next value of the specified field within the elements. 
                    }
                    else if (leftElement[num + 1] < rightElement[num + 1]) {
                        resultArr.push(leftElement);
                        leftIndex++;
                        // right element is greater than the left element
                    }
                    else {
                        resultArr.push(rightElement);
                        rightIndex++;
                    }
                }
            }
            // right element exists
            if (rightElement != undefined) {
                // left element does not exist
                if (leftElement == undefined) {
                    resultArr.push(rightElement);
                    rightIndex++;
                }
            }
        }
        return resultArr;
    }
    var sortedArr = mergeSort(arr2D);
    // Print the contents of the sorted array
    console.log('\nSorted file contents:\n');
    sortedArr.forEach(function (val) { console.log(val); });
}
// driver code
var fileName = node_process_1.argv[2];
var num = parseInt(node_process_1.argv[3]);
fileRead(fileName, num);
