module Main
    where

import System.IO

main = do
  nums <- getNums
--   putStrLn $ show nums
  putStrLn ("The sum is " ++ show (sum nums))
  putStrLn ("The product is " ++ show (product nums))
  showFactorials nums

getNums = do
  putStrLn "Give me a number (or 0 to stop):"
  num <- getLine
  if read num == 0
    then return []
    else do rest <- getNums
            return ((read num :: Int):rest)

showFactorials []     = return ()
showFactorials (x:xs) = do
  putStrLn (show x ++ " factorial is " ++ show (factorial x))
  showFactorials xs

factorial 1 = 1
factorial n = n * factorial (n-1)