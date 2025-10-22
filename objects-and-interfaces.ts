// interface declaration
interface Car {
    type: string;
    model: string;
    color: string;
    horesPower: number;
}

// Object declaration
const car: Car = {
    type: "BMW",
    model: "M5",
    color: "White",
    horesPower: 500
};

interface Person {
    name: string;
    lastName: string;
    address: string;
    age: number;
    hobbies: string[],
    greeting: () => string;
}

const person: Person = {
    name: "Ivan",
    lastName: "Ivanov",
    address: "bul. Vitosha 30",
    age: 30,
    hobbies: ["football", "tennis", "hiking"],
    greeting: function () {
        return "Hello!My name is Ivan.";
    }
}
console.log(person)

//  properties
person.name;
person.age;

person["address"]

console.log(person.address)

// let vs const redeclaration
let dog = { name: "Spark" }
dog.name = "Bobbo"
dog = { name: "Nik" }

const cat = { name: 'Lusi' }
cat.name = "Kitty"
//  cat = {name: "Tom"}


// exlplicit object type
const mouse: { name: string; favFood: string; age: number } = {
    name: "Jerry",
    favFood: "Cheese",
    age: 7
}

// Interfaces - optional parameters, read only and string literals
interface User {
    name: string;
    readonly email: string;
    // string literals
    role: "user" | "admin" | "superadmin" | "superuser";
    // optional param
    job?: string;
    password?: string | number;
}
const user: User = {
    name: "Tom",
    email: "tom@mail.com",
    role: "admin",
    job: "QA"
};
user.password = 1234;

interface UserPermissions extends User{
    permissions: string;
}

const user2: UserPermissions = {
    name: "Tom",
    email: "tom@mail.com",
    role: "admin",
    job: "QA",
    permissions: "denied"
};