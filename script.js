/**
 * Object{} // are complex data types and denoted with {} and contains a key and value pair
 * */
/**
 * How to access property of oan object
 * Dot Notataion 
 *Bracket Notation
 */

 /**
  * Arrays are collection of items, it is denoted by []
  * and each item in is separated with a comma.
  * Each item is at numbered called index
  * Arrays are zero-based index
  */

 let roceries = ["vetable", "carrots", "tomatoes", "lettuce", "arri"]
 console.log(roceries)

 //Accessin item in an array
 let etSeconditem = roceries[1];
 console.log("second item ==>", etSeconditem);

 //Update items in an array
 //array[index postition] = new value

 roceries[2] = "cabbage"
 console.log("updated groceries array ==>", roceries)

 roceries.push("cereal")
 console.log("cereal added ==>" , roceries)

 roceries.pop()
 console.log("cereal removed ==>" , roceries)

 
 //example 2
 let favoriteFood = ["Rice", "Beans", "Amala", "Oha"]

//  let etfavoriteFoodLenth = favoriteFood.length;
//  console.log("etfavoriteFood ==>" , etfavoriteFood)
 

//Classwork
let courses = ['HTML', 'CSS', 'JAVASPCRIPT', 'CYBERSECURITY']
courses.push("MATH", "ENLISH")
console.log("courses added ==>" , courses)

courses.pop()
console.log("ENLISH removed ==>" , courses)

let secondItem = courses[1]
console.log("second item ==>" , secondItem)

courses[2] = "Science"
console.log("updated array ==>" , courses)

let coursesLenth = courses.length
console.log("No. of items ==>" , coursesLenth)



// countin form 10 to 40
for (let i = 10; i < 41; i++) {
    console.log(i);
    
}

let myFavPlaceToLive = ["Santonini", "Maldives", "Paris", "Tokyo", "Bahamas"]
for (let i = 0; i < myFavPlaceToLive.length; i++) {
    console.log(
        `I'd visit ${myFavPlaceToLive[i]} next summer`
    );
}    

let favCountries = ["Canada", "Japan", "USA", "UK", "Qatar"]

favCountries.forEach((country, i) => {
    console.log(`This is country ${i + 1} --> ${country}`);
});
    
let someNums = [1,3,5,7,9]

someNums.map((num) => console.log(num * 2));


let students = [
    "DavidFair",
    "DavidYellow",
    "DavidDark",
    "Tosin",
    "Earnest",
    "Henry",
];

let removeNamesLesserThanSix = students.filter((student) => student.length < 6);
console.log(removeNamesLesserThanSix)

let getNamesThatStartWithD = students.filter((student) => student.startsWith('D'));
console.log(getNamesThatStartWithD)

/**
 * function is  a block of code used to perform reusable task
 * They are identified by the function keyword
 * function funName(){}
 */

//Basic way: Function 
function name(params) {
    //code block
    //function body/logic
}

//1

// console.log("Add two numbers function expression ===>", sumNumbers(3,2));

//Arrow function
const welcome = () => {
    //code block
    //function body/logic
}

// const oddToEven = (num) => {
//     return num * 2
// }

// console.log("Odd to even ===>", oddToEven(5))

// const checkNum = (num) => {
//     if (num % 2 === 0) {
//         console.log('This is an Even number');
//     } else {
//         console.log("This is an Odd number");
//     }
// };

// const evenToOdd = (odd) => {
    //     if (odd == )
    // }



function converttoodd(number) {
    let convertion = number * 2
    if (number % 2 === 0)
        console.log("THis is already even")
    else (number % 2 === 1)
        console.log(`Your converted number is ${convertion}`)
}

converttoodd(3)

function greet(name1, name2) {
console.log(`Hello!, ${name1}, you're also welcome ${name2}`)
}    
greet("Ayo","David");

// function addNum(num1,num2){
//     let sum = num1 + num2
//     return sum;
// }

// console.log("Add two numbers ===>", addNum(3,2));

// let sumNumbers = function addNumbers(num1,num2) {
//     let sum = num1+num2;
//     return sum;
// };