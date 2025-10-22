interface Person {
    name: string;
    lastName: string;
    age: number;
    email: string;
    phoneNumber: number;
}

interface PersonInfo extends Person{
    country?: string;
    greeting?: () => string;
}

const person: Person={
    name: "Gosho",
    lastName: "Petkov",
    age: 42,
    email: "goshoptkv@mail.com",
    phoneNumber: 3598881234567
}

const person2: PersonInfo ={
    name: "Gosho",
    lastName: "Petkov",
    age: 42,
    email: "goshoptkv@mail.com",
    phoneNumber: 3598881234567,
    country: "Bulgaria",
    greeting: function () {
        return "Say hello to my little friend!";
    }
}