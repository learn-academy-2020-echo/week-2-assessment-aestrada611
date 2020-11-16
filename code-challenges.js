// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.

var num1 = 15
// Expected output: "15 is divisible by three

var num2 = 0

var num3 = -7

//function must have if and esle statment
//will use stirng interpolation
const divisible = (num) =>{
  if(num % 3 === 0){
    return `${num} is divisible by three`
  }else{
    return `${num} is not divisible by three`
  }
}

//console log all of the variables
console.log(divisible(num1));
console.log(divisible(num2));

//var num2 = 0
// Expected output: "0 is divisible by three"

//var num3 = -7
// Expected output: "-7 is not divisble by three"

console.log(divisible(num3));



// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

const capitalize = (array) =>{
  // for(let i = 0; array.length; i++){
  //   array.map(value=>{
  //     return array.toUpperCase
  //   })
//must use a .map to iterate through the array and .touppercase to make the change within
  let array1 = array.map(value => {
    //important to put brackets with the 0 to only capitalize one of the ltters. That is indicating to capitalize only the letter in positoin idex 0.
    //if i were to put no brackets would caplizlatie all the characters in the array
    return value[0].toUpperCase() + value.substring(1)
//looked into the syllabus and got the substring  method but dont understand what it does.
//prior to putting it there it would just give me back the fitst letter capitlaized

  })
  return array1.join(" ")
  //have to put space between quotes in order to get it to space them out correctly
}
console.log(capitalize(randomNouns))


///////// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 90, 107]

//must use typeof
//condtional type of
//use of filter
//looked up built in method .sort()


const numberSorter = (array) =>{
  let filteredArray = array.filter(value => {
    return (typeof value === "number")
  })
  return filteredArray.sort(function(a, b){return a-b})
}

console.log(numberSorter(mixedDataArray));




// --------------------4) Create a function that takes in a string and logs the index of the first vowel.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "throw"
// Expected output: 3



const indexLog = (string) => {

let splitString = string.split("")

let splitFilter =splitStirng.filter(value, index => {
  return value === "a" || "e" || "i" || "o" || "u"
})
}

//I struggled with this question alot but I was able to ask for help from my peers and work it out. I wrote the code for the soultion but still wanted to go over it again because it did stump be at the start.

//if stringSplit




//for (let i = 0; i < string.length; i++){
//  if([i].valueOf() === "a" || [i].valueOf() === "e" || [i].valueOf() ==="i" || [i] ==="o" || [i].valueOf() ==="u"){
//return i
//}
//return i
  //need a .map to go through string and find syllabus
  //conditonal stament saying when to log the index
  //return string.filter(value, index =>
//let vowel = ("a", "e", "i", "o", "u")

//  let vowelChecker = string.indexOf("a" || "e" || "i" || "o" || "u")
    //if(charAt([i]) === "a" || charAt([i]) === "e" || charAt([i]) === "i" || //charAt([i]) === "o" || charAt([i]) === "u" || charAt([i]) === "y")
    //return vowelChecker
    //return if
  //})
//}

console.log(indexLog(vowelTester1));
console.log(indexLog(vowelTester2));





// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"


//create a condtional using if and else if in order to have symbol be identifed and then run the operation
//must make rule about dividing by zero
//num2 cannot eqaul 0 during divison

const calculator = (num1, symbol, num2) =>{
if(symbol === "+"){
  return num1 + num2
} else if(symbol === "-"){
  return num1 - num2
}else if(symbol === "*"){
  return num1 * num2
}else if(symbol === "/" && num2 ===0){
  return "Can't divide by 0!"
}else if(symbol === "/"){
  return num1 / num2
}
}
  //let solution = num1 += symbol += num2

//   return solution
// }

//console.log(combined(calculator));
// Uncomment and use the following console logs to test your function
console.log(calculator(3, "*", 9))

// Expected output: 27

 console.log(calculator(16, "+", 3))
// Expected output: 19

console.log(calculator(89, "/", 0))
// Expected output: "Can't divide by 0!"
