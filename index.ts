#! /usr/bin/env node

import inquirer from "inquirer"

// 1) computer will generate a random number 

// 2) user imput for guessing number 

// 3) compare user imput with computer generated number and show result 

const randomnumber = Math.floor(Math.random() * 10 + 1);

const answers = await inquirer.prompt([
    {
       name: "userguessednumber",
       type: "number",
       message: "please guess a number between 1 -10:",
    }
]);

console.log(answers)

if (answers.userguessednumber === randomnumber){
    console.log("congratualtions! you guessed right numder." );
} else {
    console.log("you guessed wrong number.");
}

