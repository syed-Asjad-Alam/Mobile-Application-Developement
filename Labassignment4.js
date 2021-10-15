
/* *****TASK 1****** */
const result = (array, n) =>  array.map(x => typeof(x) == "number" ?  x * n : x)
console.log(result([1,2,"asjad",4], 2))

/* *****TASK 2****** */

const article = (array) => array.map(x => x.startsWith("a") || x.startsWith("e") || x.startsWith("i") || x.startsWith("o") || x.startsWith("u") == true ? "An " + x: "a " + x) 
console.log(article(["apple", "mango", "orange", "pear"]))

/* *****TASK 3****** */
const sum = (array) => array.reduce((x,y) => x + y )
console.log(sum([1,2,3]))

/* *****TASK 4****** */
const camelstep = (str) => {
    for (i = 0 ; i < str.length; i++) {
        if (str[i] == "-" || str[i] == "_") {
            str = str.replace(str[i+1],str[i+1].toUpperCase())
            str = str.replace(str[i],"")
        }
    }
    return str
} 


console.log(camelstep("the-stealth_warrior"))

/* *****TASK 5****** */
const list = (array) => {
    string = ""
    for(i = 0; i < array.length; i++) {
        if (array.length < 2) {
            string = array[i].fname
        }else if(array.length == 2) {
            if (i == array.length - 1) {
                string += array[i].fname
            }
            else {
                string += array[i].fname + " & "
            }

        }
        else if(array.length > 2) {
            if (i == array.length - 2) {
                string += array[i].fname + " & "
            }
            else if (i == array.length - 1) {
                string += array[i].fname
            }
            else{
                string += array[i].fname + " , "
            }
        }
    }
    return string

}
console.log(list([{fname:"bart"}, {fname:"lisa"}, {fname:"saleh"}, {fname:"asjad"}]))

/* *****TASK 6****** */




