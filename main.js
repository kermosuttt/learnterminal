import yargs from 'yargs';
import { hideBin } from 'yargs/helpers'
const argv = yargs(hideBin(process.argv)).argv
console.log(argv.value1 + ' ' + argv.sign + ' ' + argv.value2 + ' = ' );