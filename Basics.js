var a
console.log(a)

var b = a + 10
console.log(b)

var c = 10
var c = 100
console.log(c)

var c = true
console.log(c)

var a = 10
var b = "10"

console.log(a == b)

console.log(a === b)

console.log(a !== b)

console.log(typeof "")
console.log(typeof 15.8)
console.log(typeof x)
console.log(typeof{fname: "Asjad", lname:"Alam"})
console.log(typeof [1,2,3])
console.log(typeof (1,2,3))
console.log(typeof ("1","2"))

/* Null and undefined are equal but their type is not equal */

var x = undefined
var y = null
console.log(x == y)
console.log(x === y)

var x = 10
var x = 100   /*Possible*/

console.log(x)

let po = 90
console.log(po)
/*let po = 190   /*This is not possible*/  

let pi = 10
pi = 1000


console.log(pi)

if (pi == 1000) {
    let pu = 190
    console.log(pu)
}

/* console.log(pu)   /*This will not run because pu scope level is block. */

const pie = 3.14
/*pie = 90                 Not Possible */
/*const pie = 90             Also not Possible */

console.log(pie)

if (pie == 3.14) {
    let absolon  = 2.71
    console.log(absolon)
}
/*console.log(absolon)  This will also not run because absolon scope level is also block*/

console.log("HI")