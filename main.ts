import inquirer from "inquirer";
import chalk from "chalk";

const answer=await inquirer.prompt([
    {
        message :chalk.yellow.bold("Enter your Weight in KG"),
        "type" :chalk.italic( "number"),
        name : "WeightInKg",
    },
    {
        message :"Enter your Height in Meters",
        "type" : "number",
        name : "HeightInKg",
    }
]);
if(answer.WeightInKg && answer.HeightInKg){
    console.log(answer.WeightInKg/(answer.HeightInKg * answer.HeightInKg));
};