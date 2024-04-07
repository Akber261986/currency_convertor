#! /usr/bin/env node
import inquirer from "inquirer";

let currency:any = {
    USD: 1,        // base currency
    PKR: 280,
    INR: 83.30,
    CNY: 7.23,
    KWD: 0.31,
    EUR: 0.92,
    SAR: 3.75,
    IRR: 42075,
    BTC: 0.000014
}

let userinput = await inquirer.prompt([
    {
        message: "Select A Cruncy From Change.",
        type: "list",
        name: "from",
        choices: ["USD", "PKR", "INR", "CNY", "KWD", "EUR", "SAR", "IRR", "BTC"]
    },
    {
        message: "Select A Cruncy To Change.",
        type: "list",
        name: "to",
        choices: ["USD", "PKR", "INR", "CNY", "KWD", "EUR", "SAR", "IRR", "BTC"]
    },
    {
        message: "Please Enter your Amount",
        type: "number",
        name: "changeCruncy",
    }
])

let userFrom = (currency[userinput.from]);  // It will dynamitically change a string to Number.
let userto = (currency[userinput.to]);          // same as above
let useramount = userinput.changeCruncy;
let basecurrency = (useramount/userFrom); // Converting amount to a base currency
let result: number =  (userto*basecurrency); // converting amount to required currency
let res = result.toFixed (2);               // to fix only 2 digit after a decimal
console.log(`The ${useramount}:${userinput.from} will be round about ${res}:${userinput.to}`);
