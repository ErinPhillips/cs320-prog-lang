# HW3 HowTo - GOLang
Erin Phillips | CSCI 320 | hw8.go

## What It Does
As per assignment guidelines, hw8.go accepts 2 command line arguments, a text file and an integer(0,1,2)

    go run hw8.go Sample_A8.txt 2

Each line of the text file is used to instantiate a Person struct that contains the values: last name, first name, and series. Each Person is then saved into a slice of Person structs 

The program sorts based on the given integer from the command line. 

0 -> sorts on last name\
1 -> sorts on first name\
2 -> sorts on series

String() prints the slice contents in an organized manner:

    firstName lastName: series

## Additional Information
At first, I tried to implement the sort interface by explicitly coding `type sort interface {...}` However, I found that difficult as the interface could only have 1 method. Instead I opted to modify sort anonymously. 
