module Main
    where

import System.Environment

-- Main is a do block of "impure" code that uses the pure binary sort function

main = do

    -- Get the command line argument

    args <- getArgs
    print(args)

    -- Read the full file into a variable

    contents <- readFile (head args)
    print contents

    let linesIn = lines contents
    print linesIn
    print $ bSort linesIn

-- A basic bubble sort implementation
-- https://www.adrians-blog.com/2020/11/03/building-algorithms-with-haskell-bubble-sort/

bSort [] = []
bSort x = case new == x of
               True -> x
               False -> bSort new
    where
        new = bSortInner x
        
        bSortInner [] = []  
        bSortInner [x] = [x]
        bSortInner (x : y : xs)
            | y <= x = y : bSortInner (x : xs)
            | otherwise = x : bSortInner (y : xs)