import chalk from 'chalk';
import boxen from 'boxen';
import readline from 'readline';
import inquirer from 'inquirer';

function write(text) {
process.stdout.write(text);
}


inquirer
.prompt([
{type:'input', name:'name', message: 'What is your name?'},
{type:'list', name:'gender', message:'What is your gender?', choices: ['male', 'female', 'bigender', 'apache helicopter', 'other']},
{type:'number', name:'number', message: 'What is your number?'},
{type:'confirm', name:'confirm', message: 'Are you an idiot?'},
{type:'password', name:'password', message: 'Enter a password'},
{type:'checkbox', name:'items', message: 'Select items to use in a zombie apocolypse', choices: ['knife', 'machete', 'pistol', 'machine gun', 'fork']},
{type:'rawlist', name:'size', message: 'What clothing size do you need?', choices: ['s', 'm', 'l', 'xl', 'xxl']},
{type:'expand', name:'expand', message: 'Conflict on file.js', choices: ['delete','overwrite','ignore', 'abort']},
{type:'editor', name:'editor', message: 'Select your preferred editor?'},
])
.then((answers) => {
console.log(answers);
})
.catch((error) => {
if (error.isTtyError){
// Prompt couldn't be rendered in the current enviroment
} else {
//Something else went wrong
}
});
