-- This only works with ghci since it has no main module/function


x = 5
y = 3.14159
z = (6,"hello")

z' = y * fst z

l1 = [1,2,3,4]
l2 = 0:l1
l3 = l1 ++ [5]

fn = putStrLn "Hello World"
fn' val = val + 3
