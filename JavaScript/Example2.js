// CSCI-320 Dr C

// Session 2 Example Code

// Closures

function outer(v1) {

    return function(v2) {
        return v1+v2
    }
}

f1 = outer(1)
f2 = outer(25)

console.log('f1:', f1(2))
console.log('f2:', f2(2))

// var vs lst vs const

function varlet() {

    var v1 = 'Bilbo'
    let v2 = 'Frodo'

    console.log(`varlet 1: v1=${v1}, v2=${v2}`)
    
    {
        console.log(`varlet 2: v1=${v1}, v2=${v2}`)
        
        var v3 = 'Gandalf'
        let v4 = 'Sauron'

        console.log(`varlet 3: v1=${v1}, v2=${v2}, v3=${v3}, v4=${v4}`)

        v1 = 'Bilbo Baggins'

    }
    
    console.log(`varlet 4: v1=${v1}, v2=${v2}`)
    // console.log(`varlet 5: v1=${v1}, v2=${v2}, v3=${v3}, v4=${v4}`)
}

varlet()


// Complex objects/closures

x = new Object()

x.field1 = 10
x.field2 = 'Groot'
x.field3 = function() {
    console.log('outer:', this)
    cl1 = this
    return function(parm1) {
        console.log('inner:', this)
        console.log('inner:', cl1)
        return `Imbedded function with parm: ${parm1}, field1: ${cl1.field1} field2: ${cl1.field2}`
    }
}

var doit = x.field3()

console.log(doit('I am'))

x.field1 = 20

console.log(doit('I am'))