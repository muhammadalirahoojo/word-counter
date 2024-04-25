#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const answers:{
    Sentence:string
}= await inquirer.prompt([
    {
        name:"Sentence",
        type:"input",
        message:"Enter your sentence to count the word:"
}
])

const words=answers.Sentence.trim().split(" ");
// print array of words on console. 
console.log(words);
// print the word count of the sentence to the console.
console.log(`Your Sentence Word Counr is: ${words.length}`);


