/*
Author: Erin Phillips
October 20, 2022
CSCI 320 | HW6 - Kotlin

This program demonstrates a kotlin function that accepts a text file name as a command
line argument. It then extracts data from the text file and stores it in a meaningful data 
structure, then displays to the console. 

I certify this work is entirely my own. 
 */


import java.io.File // for file i/o

fun main(args: Array<String>) {

    if(args.isEmpty()) { // user did not enter a filename as cmd line arg, exit program
        println("Please specify a filename as a command line argument. e.g. sample_text.txt")
        return
    }

    val filePath = args[0]
    val namesMap: MutableMap<String, String> = mutableMapOf<String, String>()

    /*
    it.substringBefore grabs the first character of the first name (first initial)
    it.substringAfter grabs the first character of the last name (last initial)
    Uses string formatting to store desired pieces of data in the map. 
     */
    File(filePath).forEachLine {
        namesMap.set("${it.substringBefore(" ").get(0)}${it.substringAfter(" ").get(0)}", "${it}")
    }
    // for each item in the map, print the key and the value
    namesMap.forEach { k, v ->
        println("$k: $v")
    }
    
    println("Please enter initials to search. e.g. EP")

    while ( true ) { // essentially an ifinite loop

        var line = readLine() // take user input

        if ( line == null) break

        if (namesMap.keys.any { it == line }) { // do the initials exist in the map?

            println("Found ${namesMap.get(line)}") // initials exist, printing name
        }
        else {
            println("Not Found") // initials do not exist
        }

    }

}