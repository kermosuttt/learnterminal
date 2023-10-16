import chalk from 'chalk';
import boxen from 'boxen';

function write(text) {
    process.stdout.write(text);
}

// Näide
//console.log(boxen(chalk.bgGreen.magenta('Hello world'), {borderStyle:'round'}));

console.log(boxen(chalk.bgWhite.rgb(0,0,255).underline('TERE!'), {padding: 6.9, margin: 6.9, borderStyle: 'classic'}));

console.log(boxen(chalk.bgBlue.magentaBright('KERMO'), {padding: 6.9, margin: 9, borderStyle: 'bold', width: 12, borderColor: 'red'}));

console.log(boxen(chalk.overline.bgCyanBright.bold('sUtT'), {borderStyle:'singleDouble', fullscreen: (2, 2), borderColor: 'cyan'}));

console.log(boxen(chalk.hex('#DEADED').bgBlack.italic('on'), {padding: 15, margin: 7.69, borderStyle:'arrow', title: 'jap', borderColor: 'green'}));

console.log(boxen(chalk.bgYellow.strikethrough('Väga'), {borderStyle:'doubleSingle', padding: 4.20, margin: 9.2, title: 'Vääga', titleAlignment: 'center', borderColor: '#ff2022'}));

console.log(boxen(chalk.bgAnsi256(200)('PRO'), {borderStyle:'round', height: 16, width: 7, borderColor: 'yellow'}));