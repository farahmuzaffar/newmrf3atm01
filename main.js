#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!");
    let accountType = await inquirer.prompt([
        {
            name: "account",
            message: "enter your account type",
            type: "list",
            choices: ["savings account", "current account"],
        },
    ]);
    if (accountType.account === "savings account") {
    }
    else if (accountType.account === "current account") {
    }
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"],
        },
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "please enter your amount",
                type: "number",
            },
        ]);
        myBalance -= amountAns.amount;
        console.log("your remaining balance is" + myBalance);
    }
    else if (operationAns.operation === "check balance") {
        console.log("your balance is" + myBalance);
    }
}
else {
    console.log("incorrect pin code");
    console.log("please try again");
}
