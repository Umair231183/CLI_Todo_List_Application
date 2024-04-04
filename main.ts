#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todoList = [];
let conditions = true;

console.log(chalk.magenta.bold("\n \t Wellcome to CodingWithUmair - Todo-List Application\n"));

while(conditions){
     let addTask = await inquirer.prompt([
        {
            name:"task",
            type:"input",
            message:chalk.green("Enter your New Task")
        }
     ]);
     todoList.push(addTask.task);
     console.log(chalk.green.bold(`${addTask.task} task added in Todo-List successfully!`));
     let addMoreTask = await inquirer.prompt([
        {
            name:"addmore",
            type:"confirm",
            message:chalk.green("Do you want to add more task ?"),
            default:"false"
        }
     ]);
     conditions = addMoreTask.addmore
    }
    console.log("Your updated Todo-List:" , todoList);