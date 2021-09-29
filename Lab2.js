
/* ********TASK 1******** */
round = (...nums) => {

    var array = []
    if (nums.length == 1){
        var ch = typeof(nums[0])
        if(ch == "object") {
            for (var j = 0; j < nums[0].length; j++) {
                array.push(Math.round(nums[0][j]))
            }

            console.log(array)
            return array
        }
        else if (ch == "number") {
            console.log(Math.round(nums[0]))
            return(Math.round(nums[0]))
        }
        
    }
    else if (nums.length < 1) {
        console.log(0)
        return(0)
    }
    else {
        for (var i = 0; i < nums.length; i++) {
            array.push(Math.round(nums[i]))
        }
        console.log(array)
        return(array)

    }


}

/* *********TASK2********** */
abs = (...nums) => {
    var array = []
    if (nums.length == 1){
        var ch = typeof(nums[0])
        if(ch == "object") {
            for (var j = 0; j < nums[0].length; j++) {
                array.push(Math.abs(nums[0][j]))
            }

            console.log(array)
            return array
        }
        else if (ch == "number") {
            console.log(Math.abs(nums[0]))
            return(Math.abs(nums[0]))
        }
    }
    else if (nums.length < 1) {
        console.log(0)
        return(0)
    }
    else {
        for (var i = 0; i < nums.length; i++) {
            array.push(Math.abs(nums[i]))
        }
        console.log(array)
        return array
    }


}
ceil = (...nums) => {
    var array = []
    if (nums.length == 1){
        var ch = typeof(nums[0])
        if(ch == "object") {
            for (var j = 0; j < nums[0].length; j++) {
                array.push(Math.ceil(nums[0][j]))
            }

            console.log(array)
            return array
        }
        else if (ch == "number") {
            console.log(Math.ceil(nums[0]))
            return(Math.ceil(nums[0]))
        }
    }
    else if (nums.length < 1) {
        console.log(0)
        return (0)
    }
    else {
        for (var i = 0; i < nums.length; i++) {
            array.push(Math.ceil(nums[i]))
        }
        console.log(array)
        return array
    }


}

floor = (...nums) => {
    var array = []
    if (nums.length == 1){
        var ch = typeof(nums[0])
        if(ch == "object") {
            for (var j = 0; j < nums[0].length; j++) {
                array.push(Math.floor(nums[0][j]))
            }

            console.log(array)
            return array
        }
        else if (ch == "number") {
            console.log(Math.floor(nums[0]))
            return(Math.floor(nums[0]))
        }
    }
    else if (nums.length < 1) {
        console.log(0)
        return (0)
    }
    else {
        for (var i = 0; i < nums.length; i++) {
            array.push(Math.floor(nums[i]))
        }
        console.log(array)
        return array
    }


}

/* ********TASK3********* */




Maththis = (str,...nums) => {
    if (str == "round") {
        round(...nums)
    }
    else if(str == "abs"){
        abs(...nums)
    }
    else if(str == "ceil") {
        ceil(...nums)
    }
    else if(str == "floor") {
        floor(...nums)
    }
    else {
        console.log("Missing or invalid function")
    }

}

Maththis("round", [4.7, 3.3])
Maththis("round",4.7)
Maththis("abs", [-4.7, -3.3])
Maththis("abs", -4.7)
Maththis("ceil", [4.7, 3.3])
Maththis("ceil", 4.7)
Maththis("floor", [4.7, 3.3])
Maththis("floor", 4.7)


/* ********TASK4******* */


function SolveThis(object) {
    var result = {}
    for (key in object) {
        if (key == "round") {
            result['round'] = round(object.round)
        }
        else if (key == "abs") {
            result['abs'] = abs(object.abs)
        }
        else if (key == "ceil") {
            result['ceil'] = ceil(object.ceil)
        }
        else if (key == "floor") {
            result['floor'] = floor(object.floor)
        }
    }

    console.log(result)


}

SolveThis({round: [4.4,3.3], abs: [-4, -7], ceil: [4.4,3.3], floor: 3.7})
