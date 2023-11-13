import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv))
  .option('value1', {
    alias: 'v1',
    describe: 'First operand',
    demandOption: true,
    type: 'number',
  })
  .option('value2', {
    alias: 'v2',
    describe: 'Second operand',
    demandOption: true,
    type: 'number',
  })
  .option('sign', {
    alias: 's',
    describe: 'Math operation: +, -, *, div',
    demandOption: true,
    choices: ['+', '-', '*', 'div'],
  })
  .help()
  .argv;

const { value1, value2, sign } = argv;

let result;

switch (sign) {
  case '+':
    result = value1 + value2;
    break;
  case '-':
    result = value1 - value2;
    break;
  case '*':
    result = value1 * value2;
    break;
  case 'div':
    result = value1 / value2;
    break;
  default:
    console.error('Invalid sign');
    process.exit(1);
}

console.log(`${value1} ${sign} ${value2} = ${result}`);
