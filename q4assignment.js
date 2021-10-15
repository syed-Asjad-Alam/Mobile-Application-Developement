var sum = (array) => array.reduce((x, y) => x+y)
var min = (array) => array.reduce((x, y) => x < y ? x : y)
var max = (array) => array.reduce((x, y) => x < y ? y : x)
var mult = (array) => array.reduce((x, y) => x*y)
var avg = (array) => array.reduce((x,y) => x+y)/array.length


console.log(sum([1,2,3]))
console.log(max([1,2,3,4,5,6,72]))
console.log(min([2,3,4,1,5,6,72]))
console.log(mult([1,2,3,4]))
console.log(avg([2,2]))

const SolveThis = (object) => {
    var result = {}
    for (key in object) {
        if (key == "sum") {
            result['sum'] = sum(object.sum)
        }
        else if (key == "min") {
            result['min'] = min(object.min)
        }
        else if (key == "max") {
            result['max'] = max(object.max)
        }
        else if (key == "mult") {
            result['mult'] = mult(object.mult)
        }
        else if (key == "avg") {
            result['avg'] = avg(object.avg)
        }
    }

    return result


}

console.log(SolveThis({sum: [1,2,3], max: [1,2,3,4,5,6,72], min: [2,3,4,1,5,6,72], mult: [1,2,3,4], avg:[2,2]}))