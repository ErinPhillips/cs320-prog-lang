# HW1 HowTo
 
## Building the program:

### 1.  Include the File Server module:
    var fs = require('fs')

### 2. Define function that takes the text file as a parameter:

    function fileRead(file) {}

### 3. Gather and store data:
Using a method from the FS module:

    const contents = fs.readFileSync(file, 'utf8')
    let arr = contents.split(/\r?\n/)

### 4. Simple bubbleSort algorithm pseudocode:
    for i -> arrayLength
        for j -> (arrayLength - i - 1)
            if currentElement > nextElement
                swap elements

### 5. Comparing the emojis in text document:
* Each element in the array is one line from the text document. To sort the lines based on the first field, we need to access the first element of each element in the array. 

* For each element in the array, use the method `.codePointAt(0)`. With 0 as the argument, we can access the element at index 0, the first element. `.codePointAt()` returns a nonnegative integer that is the code point value of the encoded code point at the position specified. 

Now we can compare the emojis that are in the text document. 

    if (arr[j].codePointAt(0) > arr[j + 1].codePointAt(0))
        swap elements

### 6. Printing the array pseudocode:
    for i -> arrayLength
        print the element at index i

### 7. Call the function
Make sure to include the name text file that you want to sort as the argument. 

`'yourTextFile.txt'` is the name of your file that you want to sort. 



    `fileRead('yourTextFile.txt')
 Text files should be of type string. 

***
## Running the program



Open your terminal. Make sure you are in the directory the file and text file is located in. Type the following. change "fileName" to the name of the file `.js` that contains the source code. 

`node fileName.js`

The program will print the output to the terminal. 

***
## Comments
* Deciding on which encoding to use for fs.readFileSync() was difficult. I found that `utf8` was sufficient in sorting the emojis properly. 
* I wasn't sure how to verify that the program was getting the right information to compare the emojis properly. So In order to check, I researched and confirmed the decimal conversions of each emoji. This is how i confirmed the comparisons were correct:
   * 🏠 = 127968
   * 🐈 = 128008
   * 🐕 = 128021
   * 🐿 = 128063
   * 🛩 = 128745
   
* I also tested the program with a different text file with the following contents: 
   
##
Input:

    apple, red
    elf, green
    candle, white
    banana, yellow
##
Output:

    apple, red
    banana, yellow
    candle, white
    elf, green
  
