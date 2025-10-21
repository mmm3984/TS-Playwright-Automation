let numsArray: number[] = [1, 2, 3];

// Task 1
numsArray.push(4);
//  console.log(numsArray);

//  Task 2
numsArray.shift();
//  console.log(numsArray);

//  Task 3
let numsArray3: number[] = [1, 2, 3, 4, 5];
//  console.log(numsArray3.map((num) => num/2));

//  Task 4 
let numsArray4: number[] = [3, 7, 1, 9, 12, 4];
let numsGreaterArray: number[] = numsArray4.filter((num: number) => num > 5);
// console.log(numsGreaterArray);

// Task 5
let numsArray5: number[] = [9, 3, 7, 2, 8, 5];
numsArray5.sort((a: number, b: number) => a - b);
// console.log(numsArray5);

// Task 6
let stringArray: string[] = ['apple', 'banana', 'cherry', 'date',
'elderberry'];
// console.log(stringArray.slice(0,3));

// Task 7
let stringArray2: string[] = ['car', 'bike', 'bus', 'train',
'boat'];
let newStringArray2 = stringArray2.slice(0, 1).concat(stringArray2.slice(3))
console.log(newStringArray2);

// Functions
// Task 8

function findLargest(a: number, b:number, c: number){
     let largest: number;
    if (a >= b && a >= c) {
        largest = a;
    } else if (b >= a && b >= c) {
        largest = b;
    } else {
        largest = c;
    }
    console.log(`The largest number is: ${largest}`);
    return largest;
}

// Task 9
function convertToCentimeters(inches: number = 10): number {
    const centimeters = inches * 2.54;
    console.log(`${inches} inches is ${centimeters} centimeters.`);
    return centimeters;
}

// Using default parameter
convertToCentimeters();

// Using passed parameter
convertToCentimeters(5); 

// Task 10
function calculateArea(width: number, height?:number){
   let area: number;
    if(!height){
       return area = width * width;
    }else{
       return area=width*height;
    }
}

console.log(calculateArea(5, 10)); 
console.log(calculateArea(5));  // Square shape
