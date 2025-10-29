// type alias declaration
type EmployeeName = string;
type EmployeeId = number;
type EmployeePosition = string;

type EmployeeData = string | number | null;

let data: EmployeeData = `Test`

let responseData: EmployeeData = 20;

// type alias with string literals

type PaymentMethod = "cash" | "card" | "crypto"

function paymentDetails(amount: number, method: PaymentMethod){
    console.log(`Payment ${amount}$ by ${method}`)
}

// type alias in interface
type ID = string| number;
type Status = "Open"| "In Progress"| "Done";


interface Ticket {
    id: ID;
    title: string;
    status: Status;
}

const ticket = {
    id: 1,
    title: "Send email",
    status: "Done"
}

const email: Email = {
    id: "#4",
    message: "Hello! Iam Peter"
}