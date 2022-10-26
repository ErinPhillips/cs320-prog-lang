-- list of ints for parameters 
-- no I/O

-- piecewise function
piece' :: Int -> Int
piece' x    
    | x < -1    = (2 * x) + 1
    | x > 3     = (-3 * x) + 7
    | otherwise = -2

-- return the value after evaluation

-- exponent function
exp' :: Int -> Int -> Int
exp' x y    
    | x == 0   = 0
    | x == 1   = x
    | y == 0   = 1
    | even y = (exp' x (div y 2)) * (exp' x (div y 2))
    | odd y = x * (exp' x ( y - 1))

-- return the value after evaluation

-- square function
square :: [Int] -> [Int]
square [] = error "The list is empty!"
square list = map (^2) list

-- return list of squared values

-- summation function
summation :: [Int] -> Int
summation [] = 0
summation (x:xs) = x + summation xs

-- return sum of list

-- composition function
comp' :: [Int] -> Int
comp' list = (summation.square)(list)

-- return sum of square list

-- list functions
count :: (Int -> Bool) -> [Int] -> Int
count fn [] = 0
count fn (x:xs)
    |fn x == True = 1 + count fn xs
    |otherwise = count fn xs

-- count filter function
count'filter :: (Int -> Bool) -> [Int] -> Int
count'filter fn xs = length(filter fn xs)

-- count list comprehension function
count'lc :: (Int -> Bool) -> [Int] -> Int
count'lc fn xs = length [x | x <- xs, fn x == True]

--closure function
closure :: [Int] -> Int
closure = count (\x -> x > 10)

--closure function different attempt
closure' :: [Int] -> [Int]
closure' = filter (\x -> x > 10)

-- Extra Credit
-- powers function
powers' :: Int -> [Int]
powers' x = [x^i | i <- [1 ..]]