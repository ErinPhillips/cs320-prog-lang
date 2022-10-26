# HW3 HowTo - Haskell 
Erin Phillips || CSCI 320 || hw3.hs

## Running the program:

### 1. The function for quick sorting is called quickSort. 
    quickSort :: Ord a => [a] -> [a]

### 2. Once inside the ghci interactive shell, navigate to the directory that contains the corresponding .hs file. 
`:cd <dir> , where dir is the path to the file`

_my file is named:_ 

`hw3.hs`

### 3. Load the module:

`:load <module> , where module is the name of the file`

_In my case:_    
`:load hw3.hs`

### 4. Call the function:

_Method 1_

`let intlist = [5, 85, 2, 12, 1, 32, 10]`

`let dbllist = [19.4, 80, 17.25, 22.2, 1.1]`

`let charlist = ['y', 'd', 'e', 'a', 'z', 'h']`

`quickSort intlist`

output:

    [1, 2, 5, 10, 12, 32, 85]

`quickSort dbllist`

output: 

    [1.1, 17.25, 19.4, 22.2, 80.0]


`quickSort charlist`

output:

    "adehyz"

#
_Method 2_


`quickSort [5, 85, 2, 12, 1, 32, 10]`

output:

    [1, 2, 5, 10, 12, 32, 85]

`quickSort [19.4, 80, 17.25, 22.2, 1.1]`

output: 

    [1.1, 17.25, 19.4, 22.2, 80.0]

`quickSort ['y', 'd', 'e', 'a', 'z', 'h']`

output:

    "adehyz"

