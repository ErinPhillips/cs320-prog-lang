mult :: (Integral a) => a -> a -> a
mult x 0 = 0
mult x 1 = x
mult x y 
    | y < 0 = 0 - mult x (-y)
    | otherwise =  x + mult x (y-1)

mult' x 0 = 0
mult' x 1 = x
mult' x y = 
    if y < 0
        then 0 - mult' x (-y)
        else x + mult' x (y-1)

main =
    -- print  map (\x -> x*2) [1,2,3] -- Doesn't work
    -- print (map (\x -> x*2) [1,2,3]) -- Works
    print $ map (\x -> x*2) [1,2,3] -- Also works

-- minimum, maximum

l1 = []
l2 = [32,12,99]

m1 l = minimum l

m2 l = maximum l

m1' xs
    | null xs = 0
    | otherwise = minimum xs

-- min, max

m3 v1 v2 = min v1 v2

m4 v1 v2 = max v1 v2

-- take, drop

l3 = take 10 [1..]
l4 = drop 5 

-- Curried map

mymap = map (\x -> x * x)

showmap = mymap $ take 10 [5,10..]

-- elem (including infix notation)

e1 = elem 3 (take 10 [1..])
e2 = elem 12 (take 10 [1..])
e3 = elem 12 $ take 10 [1..]
e4 = 3 `elem` take 10 [1..]

mymap' = (\x -> x *3) `map` [2,3,4]

-- null

n1 = putStrLn (show (null l1))
n2 = putStrLn $ show $ null l2