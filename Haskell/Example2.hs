-- Composition

comp1 :: Int -> [Char]
comp1 x = show x

comp2 :: String -> Int
comp2 s = read s

comp x = (comp2 . comp1) x

intval = 78759

hello = putStrLn("Hello " ++ show intval)

-- Simple recursion

length' [] = 0
length' l = 1 + length' (tail l)

length'' [] = 0
length'' (x:xs) = 1 + length'' xs

-- Lists

alist = [42, 99, 1, 77, 143]
blist = 98:34:56:[]

-- Basic Functions

double x = x * 2

doublemap = map double alist

doublemap1 fn lst = map fn lst

squaremap = map (\x -> x * x) alist

sum' total x = total + x
reduce' = foldl sum' 0 alist

reduce'' = foldl (\x -> \y -> x + y) 0 alist

filter' = filter (\x -> x < 50) alist

-- My Versions

mymap _ [] = []
mymap fn (x:xs) = fn x : mymap fn xs

foldl' :: (t1 -> t2 -> t1) -> t1 -> [t2] -> t1
foldl' fn init [] = init
foldl' fn init (x:xs) = fn (foldl' fn init xs) x

-- List Comprehension Versions

map'lc :: (t -> a) -> [t] -> [a]
map'lc fn xs = [fn x | x <- xs]

filter'lc fn xs = [x | x <- xs, fn x]

-- Ranges

r1 = [1..20]

r2 = [1,3..20]
r2' = [20,18..1]

r3 = [1..]

