import kotlin.math.pow
import kotlin.math.sqrt
/*
Author: Erin Phillips
October 31, 2022
CSCI 320 | HW7 - Kotlin

This program demonstrates kotlin list functions, specifically map, to peform
list processing. Computing the average word length and the standard deviation
of word length are demonstrated below. 

I certify this work is entirely my own. 
 */

 fun main(args: Array<String>) {
    if(args.isEmpty()) { // user did not enter words in cmd line arg, exit program
        println("Please enter a list of words. e.g. word dog boat cat");
        return
    }
    val words = args.toMutableList()

    println(words)

    val numWords = words.size.toDouble()
    val wordLens = words.map{word -> word.length}

    // Compute and print the average word length
    val avg = wordLens.sum() / numWords
    println("The average word length is: $avg")

    // Compute and print the standard deviation of word length
    val dev = (wordLens.map{len -> (len - avg).pow(2) }).sum()
    val stdDev =  sqrt(dev / numWords)
    println("The standard deviation of word lengths is: $stdDev")
 }

