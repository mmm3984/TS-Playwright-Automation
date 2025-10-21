function displayPersonalData(name: string, age: number) {
    return `Name ${name}, Age: ${age}`
}

console.log(displayPersonalData("Mario", 35))
displayPersonalData("Mario", 35)

const personalData: string = displayPersonalData("Peter", 25)
console.log(personalData)

function greetingVoid(): void {
    console.log("Hello world")
}

function devide(numOne: number, numTwo: number): number {
    return numOne / numTwo;
}

// arrow function
const sumNums = (numOne: number, numTwo: number) => numOne + numTwo;

function greeting(name: string, age?:number){
    if(age){
        console.log(`Pesho ${age}`)
    }
}

// default params 
function substract(numOne: number = 10, numTwo: number=5){
    console.log(numOne - numTwo);
}
