// arrays declaration
let numsArray: number[] = [1, 2, 3];
let stringArray: string[] = ["one", "two", "three"];
let combainedArray: (string | number)[] = [1, "Pesho", 3];

// access element by index
numsArray[1]
stringArray[0]
combainedArray[1]

// map() method
let multiplyNums = numsArray.map((num) => num * 2);
let mapNames = stringArray.map((currName: string) => `Hello ${currName}`);
let checkTypeOf = combainedArray.map((element: number | string) => {
    if (typeof element === "number") {
        return element + 5
    } else {
        return `Welcome ${element}`
    }
})
console.log();

let positiveNums: number[] = [2, 3, 4, 5, 6];

let filteredArray: number[] = positiveNums.filter((num: number) => num > 3);
// console.log(filteredArray)

let sortNums: number[] = [100, 2, 30, 5, 40, 6]
let sortedResult = sortNums.sort((a: number, b:number) => a - b);
// console.log(sortedResult)

// method push
sortedResult.push(200);
// console.log(sortedResult)

// method pop
sortedResult.pop();
// console.log(sortedResult);

// method shift
sortedResult.shift();
// console.log(sortedResult);

sortedResult.unshift();
console.log(sortedResult);