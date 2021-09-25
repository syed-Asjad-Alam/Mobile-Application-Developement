function product1(x, y) {
    return x*y
}

console.log(product1(8, 8))

function f1() {return "f1"}
function f1() {return "f2"}
console.log(f1())

function f1(a) {return "f1"}
function f1(a) {return "f2"}
console.log(f1())

function f1(a) {return "f1"}
function f1(a, b) {return "f2"}
console.log(f1())

function f1(a) {return "f1"}
function f1(a, b) {return "f2"}
console.log(f1(5))

function f1(a) {return "f1"}
function f1(a, b) {return "f2"}
console.log(f1(5, 6))

function mult(a = 1, b = 5) {
    return a * b
}

console.log(mult())
console.log(mult(5,5))
console.log(mult(6))
console.log(mult(7,6,6))

function addAllnum() {
    var sum = 0;
    for (i = 0; i < arguments.length ; i++)
        sum += arguments[i]
    
    return sum
}

console.log(addAllnum())
console.log(addAllnum(1,3))
console.log(addAllnum(1,2,3,4,5,6,7,8,9))

function prodAllnum(...parametres) {
    var prod = 1;
    for (i = 0; i < parametres.length ; i++)
        prod *= parametres[i]
    
    return prod
}

console.log(prodAllnum())
console.log(prodAllnum(3,4))
console.log(prodAllnum(3,2,4))

function sum(n1, n2) {
    n1 = n1 + n2
    return n1
}

var a = 10, b = 10
console.log(sum(a, b))

function strFun(st1) {
    st1 = "twenty"
}
var yt = "thirty"
strFun(yt)
console.log(yt)