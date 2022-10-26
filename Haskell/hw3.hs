-- Erin Phillips
-- CSCI320
-- hw3.hs
-- I certify this work is entirely my own.


-- quicksort function

quickSort :: Ord a => [a] -> [a]
quickSort [] = []
quickSort (x:xs) = quickSort lesser ++ [x] ++ quickSort greater
    where
        lesser = filter (< x) xs
        greater = filter (>= x) xs

-- return the sorted list