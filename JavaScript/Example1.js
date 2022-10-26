// CSCI-320 Dr C

// Session 1 Example Code

// Supported in all browsers
// Server side node.js

var i = 10
var m
var x = 123.45
var s = "Hi ya'all"

// console.log(i,x,s)
// console.log(`i = ${i}, x = ${x}, s = ${s}`)

m = 2
console.log(m)
var b = false
// console.log(`b = ${b}`)

// // arrays

// var x = [1, 2, 'a', false]
// console.log(`array1 = ${x}`)

// console.log( 
//     x.filter(
//         function (x1, indx) {
//             console.log('arrays 2:', x1, typeof(x1))
//             return typeof(x1) == 'string'
//         }
//         )
//         )
        
// // Objects

// var aa = {a: 1, b:2, c: x}
// console.log(`aa = ${aa}`)
// console.log('aa ', aa)
        

// aa['frodo'] = new Object()
// aa['frodo'][47] = 'hi'
// aa['frodo'][52] = 'class'

// console.log('objects 2:', aa['frodo'])
// console.log('objects 3:', aa)
        
// // basic loops

// for (var key in aa) {
//     console.log('loops 1:', `For key ${key} the value is ${aa[key]}`)
// }

// x.forEach(function(x, i) {
//     console.log('loops 2:', `Value ${x} is at index ${i}`)
// })

// for (var i = 0; i < x.length; i++ ) {
//     console.log('loops 3:', x[i])
// }

// // including library modules

// var math = require('mathjs')

// console.log('lib 1:', math.pi, typeof(math))

// // Functions

// var mysqrt = function(x) {
//     console.log('fn 1:', `The square root of ${x} is ${math.sqrt(x)}`)
// }

// mysqrt(23)

// aa['fn'] = mysqrt
// console.log('fn 2:', aa)

// aa['fn'](81)

// aa.fn(81)