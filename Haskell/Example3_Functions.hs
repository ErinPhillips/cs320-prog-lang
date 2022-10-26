module Functions
    where

-- If expression

signum' x =
    if x < 0
      then -1
      else if x > 0
        then 1
        else 0

filter' fn [] = []
filter' fn (x:xs) = 
    if fn x
      then x : filter' fn xs
      else filter' fn xs

filter'' fn [] = []
filter'' fn (x:xs) = 
    if fn x
      then x : rem
      else rem
    where rem = filter'' fn xs

-- Case expression

f x =
    case x of
      0 -> 1
      1 -> 5
      2 -> 2
      _ -> -1

f' x =
    case x of
      0 -> 0
      1 -> sq 5
      2 -> sq x
      _ -> -1
    where sq y = y * y

-- Guards

f'' x 
  | x == 0 = 1
  | x == 1 = 5
  | x == 2 = 2
  | otherwise = -1

filter'g _ [] = []
filter'g fn (x:xs)
    | fn x = x : filter'g fn xs
    | otherwise = filter'g fn xs

filter''g _ [] = []
filter''g fn (x:xs)
    | fn x = x : remainder
    | otherwise = remainder
    where remainder = filter''g fn xs

-- Let..in

roots a b c =
    ((-b + sqrt (b*b - 4*a*c)) / (2*a), (-b - sqrt (b*b - 4*a*c)) / (2*a))

roots' a b c =
    let discr = sqrt (b*b - 4*a*c)
        twice_a = 2*a
    in  ((-b + discr) / twice_a,
         (-b - discr) / twice_a)

-- Currying

map'double = map (\x -> x * 2) 

filter'smaller :: [Integer] -> [Integer]
filter'smaller = filter (\q -> q < 50) 

foldl'sum :: (Foldable t, Num a) => t a -> a
foldl'sum = foldl (+) 0
