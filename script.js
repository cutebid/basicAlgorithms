/*
 Write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius.

 Note:

- Round up your answers to 4 decimal places (hint: use the toFixed method)
- C = (F - 32) x 5/9; (e.g 0deg F = -17.7778 deg C)
- if the parameter passed is not a number or a string that can be converted to a valid number, return a string with the format below:
    `${parameter} is not a valid number but a/an ${parameter's type}.`

*/

function convertFahrToCelsius(f){
    let c = 0;
    let errorValue = JSON.stringify(f)
    if(typeof f === 'number' || typeof f === 'string'){
        c = (f - 32) * (5/9);
        return c.toFixed(4)
    }
    else if(Array.isArray(f)){
        return `${errorValue} is not a valid number but a/an array` 
    }
    else{
        return `${errorValue} is not a valid number but a/an ${typeof f}` 
    }
}

console.log(convertFahrToCelsius({temp:0}))


/*  Write a function named "checkYuGiOh" that takes a number, n, as an argument, creates an array of numbers from 
1 to n and replaces multiples of 2, 3, and 5 with "yu", "gi" and "oh", logs the resulting array to the console 
then returns the resulting array.

Note:

- for numbers that have multiple factors, use hyphens as separators
e.g 10 === "yu-oh", 30 === "yu-gi-oh"

- perform checks on your input and return `invalid parameter: ${parameter}` if an invalid parameter - i.e. a string that can't be converted to a number or another data type - is passed. 
Use the following cases as guides:

*/

function checkYuGiOh(n){
    if(typeof n === 'number' || n === String(Number(n))){
        let arrOfNumAndString = []; 
        for(let i = 1; i <= n; i++){

           if(i % 2 === 0 && i % 3 === 0 && i % 5 === 0 ){
                       arrOfNumAndString.push('yu-gi-oh') ;
           }
           else if(i % 2 === 0 && i % 3 === 0){
               arrOfNumAndString.push('yu-gi')
           }
           else if(i % 2 === 0 && i % 5 === 0){
               arrOfNumAndString.push('yu-oh')
           }
           else if(i % 3 === 0 && i % 5 === 0){
               arrOfNumAndString.push('gi-oh')
           }
           else if(i % 2 === 0){
              arrOfNumAndString.push('yu')
           }
           else if(i % 3 === 0){
              arrOfNumAndString.push('gi')
           }
           else if(i % 5 === 0){
              arrOfNumAndString.push('oh')
           }
   
           else{
             arrOfNumAndString.push(i)
           }
       }
          console.log(arrOfNumAndString);
          return arrOfNumAndString
    }
    else {
        return (`invalid parameter: ${JSON.stringify(n)}`)
       
    }
}
console.log(checkYuGiOh('10'));