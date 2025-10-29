// let vs const
let num: number = 5;
num = 10;
num = 15;

const welcomeMssg: string= "Welcome";
// Cannot assign to 'welcomeMssg' because it is a const.
// welcomeMssg = "Welcome, Peter"

// string
let message: string = "Hello, Peter";
let messageLenght: number = message.length;
console.log(messageLenght)

// String interpolation
let welcomeMessageDetails: string = `Text message lenght is ${messageLenght}`;
console.log(welcomeMessageDetails);

let numOne: number = 10;
let numTwo: number = 5;

let add: number= numOne + numTwo;
let substract: number = numOne - numTwo;
let multiply: number = numOne * numTwo;
let divide: number = numOne / numTwo;

// boolean
let isEqual: boolean = numOne === numTwo;
console.log("isEqual", isEqual);

// logical operator
let isEqualTo: boolean = numOne ===10 && numTwo ===5;

// ternary operator
let numberComparison: string = numOne> 0? "The Number is positive":"The number is negative"

// Union Types
let id: string | number;

id = 10
id = "10"