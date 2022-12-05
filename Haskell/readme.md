# HW3 HowTo - Haskell 
Erin Phillips | CSCI 320 | hw4.hs
## Piecewise Functions and Recursion
1. `piece' :: Int -> Int` - Takes an integer and returns the result using a piecewise function.

2. `exp' :: x -> y -> Int` - Implements the exponential function x^y. 
#
## Functional Composition
3. `square:: [Int] -> [Int]` - Squares the values of a list, returns the list.

4. `summation :: [Int] -> Int` - Sums the values of a list, returns the list.

5. `comp' :: [Int] -> Int` - Function composition of `square` and `exp`. Returns the sum of squares.
#
## List Operations
Each of these functions returns the number of elements in a list that meet some user specified criteria. 

6. `count :: (Int -> Bool) -> [Int] -> Int` - Uses Haskell guard syntax

7. `count'filter :: (Int -> Bool) -> [Int] -> Int` - Uses Haskall filter function

8. `count'lc :: (Int -> Bool) -> [Int] -> Int` - Uses list comprehension
#
## Currying
Per the assignment, the closure function must use a `count` function and return a curried function that, when passed a list, returns all values in the list that are greater than 10. 

9.  `closure = count ( \x -> x > 10)`

I found it difficult populate a list of the values that met the criteria while using the count function. Instead, this returns the number of occurences, just like the above count functions. 

10.  `closure' = filter (\x -> x > 10)`

Here, I used the filter function to extract the values that met the condition specified. This returns the list of values that meet the condition.

_I am unsure how I would curry one of the count functions to return a list of values, when the count functions specifically return an Int_


## Extra Credit
11.  `powers' :: Int -> [Int]`

        Expects user to use take function to calculate. 
