//Is Truthy block 13
console.log("Truthy:") //displays the section of block 13 workshop
const phrase = "I am a string" // set const as input string
const nothing = null // set input null as constant nothing
const isMan = false // set input false as constant isMan
const notdefined = undefined // set input undefined as constant notdefined
const num33 = 0 // set input num1 as constant 0
const text = "" // set input text as constant ""

if (phrase) { //if value of phrase returns true 
    console.log(true) //console log returns true since if statement is true
}

if (!isMan) { // logical not returns the falsy isMan as true
    console.log("the boolean value false is falsy") // console logs the string since if statement is true
}

if (nothing) { } // if statement of falsy nothing returns false
else { // since return of if is false proceed to next statment
    console.log("the null value is falsy") // console log the string since if statement is false
}

if (notdefined !== true) { //if statement that notdefined is not equal to true returns true
    console.log("undefined is falsy") // console log the string since if statement is true
}

if (!num33) { // logical not returns the falsy num1 as true
    console.log("the number 0 is falsy (the only falsy number)")//console log the string since if statemnet is true
}

if (text === true) { }//if statement is false since text is a falsy
else { // since if statement is false proceed to next statement
    console.log("The empty string is falsy (the only falsy string)") //console log the string since if statment is false
}

//Number line
console.log("Number Line:")
let num1 = 50 // first number set
let num2 = 51 // first number set

sum1 = num1 + num2 // sum that equals 101

if (sum1 >= 100) { // if sum is greater than or equal to 100
    console.log(sum1 + " is greater then 100") // prints sum1 plus is greater then 100
}

num1 = 99 //second number set
num2 = -2 //second number set
sum1 = num1 + num2 //sum that equals 97

if (sum1 > 0) { // if sum1 is greater than 0
    console.log(sum1 + " is greater than 0") //prints sum1 plus is greater than 0
}

num1 = 0 // third number set
num2 = 101 // third number set
sum1 = num1 + num2 // sum that equals 101

if (sum1 < 100) { } // if sum1 is less than 100 which returns false
else {
    console.log(sum1 + " is greater than 100")// if statement is false print sum1 plus is greater than 100
}

num1 = 500 // fourth number set
num2 = -500 // fourth number set
sum1 = num1 + num2 //sum that equals 0 

if (sum1 === 0) { // if sum1 equals 0
    console.log(sum1 + " is equal to 0") //if statement true print sum1 plus is equal to 0
}

num1 = -1000 // fifth number set
num2 = 0 // fifth number set
sum1 = num1 + num2 //sum1 is equal to -1000

if (sum1 <= 0) { //if sum1 is less than or equal to 0
    console.log(sum1 + " is a negative number") //if true print sum1 plus is a negative number
}

num1 = -5  //sixth number set
num2 = 0 //sixth number set
sum1 = num1 + num2 // sum1 equals -5

if (sum1 >= 0) { } // if sum1 is greater or equal to 0
else {
    console.log(sum1 + " is a negative number") // if statement is false then print sum1 plus is a negative number
}

// Greater than 5
console.log("Greater than 5:") //displays the section of block 13 workshop
num1 = 5 // first number set
num2 = 6 // first number set

if (num1 >= 5 && num2 >= 5) { //if 5 is greater than or equal to 5 and 6 is greater than or equal to 5 
    console.log(true) // print true if statement is true
}

num1 = 10 //second number set
num2 = 11 //second number set

if (num1 >= 5 && num2 >= 5) { //if num1 is greater than equal to 5 and num2 is greater than equal to 5 
    console.log(true) // print true if statement is true
}

num1 = 0 // third number set
num2 = 0 // third number set

if (num1 >= 5 && num2 >= 5) { //if 0 is greater than or equal to 5 and 0 is greater than equal to 5
    console.log(true) // print true if statement is true
}
else {//if statement is false then print false
    console.log(false)
}

num1 = 1000 // fourth number set
num2 = -1000 // fourth number set

if (num1 >= 5 && num2 >= 5) { //if 1000 is greater than or equal to 5 and -1000 is greater than equal to 5
    console.log(true) // print true if statement is true
}
else {//if statement is false then print false
    console.log(false)
}

num1 = 6 // fifth number set
num2 = 4 // fifth number set

if (num1 >= 5 && num2 >= 5) {//if 6 is greater than or equal to 5 and 4 is greater than equal to 5
    console.log(true)// print true if statement is true
}
else {//if statement is false then print false
    console.log(false)
}

num1 = 5 //sixth number set
num2 = 5 //sixth number set

if (num1 >= 5 && num2 >= 5) {//if 6 is greater than or equal to 5 and 4 is greater than equal to 5
    console.log(true)// print true if statement is true
}

// Pair and Compare
console.log("Pair & Compare:") //displays the section of block 13 workshop
let param1A = "cat"
let param1B = "cat"

let param2A = 6
let param2B = "6"

if (param1A === param1B || param2A === param2B) { //if cat equals cat or 6 equals six
    console.log(true) // print true if statement is true
}

param1A = "five"
param1B = "5"

param2A = "dog"
param2B = "dawg"

if (param1A !== param1B && param2A == param2B) { // if five does not equal 5 and dog equals dawg 
    console.log(true)// print true if statement is true
}
else {
    console.log(false) // print false if statement is false
}

param1A = 0
param1B = false

param2A = "horse"
param2B = "horse"

if (param1A == param1B || param2A === param2B) { //if 0 equal false or horse equals horse
    console.log(true) //print true if statement is true
}
else {
    console.log(false)//print false if statement is false
}

param1A = "eight"
param1B = "eight"

param2A = "ate"
param2B = "ate"

if (param1A === param1B && param2A === param2B) {//if eight equal eight and ate equals ate
    console.log(true)//print true if statement is true
}
else {
    console.log(false)//print false if statement is false
}

param1A = 11
param1B = "eleven"

param2A = "four"
param2B = "for"

if (param1A === param1B && param2A === param2B) {//if 11 equals eleven and four equal 4
    console.log(true)//print true if statement is true
}
else {
    console.log(false)//print false if statement is false
}

param1A = "cake"
param1B = "cake"

param2A = "pie"
param2B = "pie"

if (param1A === param1B && param2A === param2B) {//if cake equals cake and pie equals pie
    console.log(true)//print true if statement is true
}
else {
    console.log(false)//print false if statement is false
}
