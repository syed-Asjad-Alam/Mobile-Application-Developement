
function isPrime(num) {
    var prime = num != 1;
    for(var i=2; i<num; i++) {
        if(num % i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}

const primenumber = (...arrays) => {
    var resultarray = []
    for (i = 0; i < arrays.length; i++){
        sum = 0
        for (j = 0; j < arrays[i].length; j++){
            if (isPrime(arrays[i][j])) {
                sum += arrays[i][j]
            }
        }
        var objectarr = {}
        objectarr['input'] = arrays[i]
        objectarr['sumofprime'] = sum
        resultarray.push(objectarr)

        
    }

    return resultarray

}
k = primenumber([4,3],[2,2,3,44])
for (i = 0; i < k.length; i++)
    console.log(k[i])


