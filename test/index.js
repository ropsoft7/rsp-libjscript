const fs = require('fs');
const exec = require('../src/exec.js');
const get = require('../src/get.js')
const set = require('../src/set.js')
const util = require('../src/util/index.js');
const prin = require('../src/prin.js');
const debug = require('../src/debug.js');
const prompt = require('../src/prompt.js');

console.log('Running exec(echo "Hello World")')

exec('echo "Hello World"')

console.log(`exec('echo $(whereis qterminal)')`)

const qtermBinPath = exec('echo $(whereis qterminal)')

console.log('qtermBinPath.value', qtermBinPath.value)

console.log('Running rsp.util.replacef');

console.log('Current sample.txt content:  ', fs.readFileSync(__dirname + `/sample.txt`).toLocaleString());

util.replacef(__dirname + `/sample.txt`, 'Version = "7.7.0"', 'Version = "7.7.7"');

console.log('New sample.txt content:  ', fs.readFileSync(__dirname + `/sample.txt`).toLocaleString());

console.log('Setting up back old value of sample.txt...');

util.replacef(__dirname + `/sample.txt`, 'Version = "7.7.7"', 'Version = "7.7.0"');

console.log('Back to original sample.txt content:  ', fs.readFileSync(__dirname + `/sample.txt`).toLocaleString());

prompt(async ({ askSimple, askBoolean }) => {

    const name = await askSimple('Qual é o seu nome?'),
        age = await askSimple('Qual é a sua idade?', 'number'),
        wannaGoDesktop = await askBoolean('Do you wish to start a desktop session?');

        console.log(`Olá, ${name}! Você tem ${age} anos.`);
    console.log('wannaGoDesktop', wannaGoDesktop)

});

prin("prin message")
prin("prin error message", { type: "error" })
prin("prin warning message", {type: "warning"})
debug({ thes: "message", iss: "a", plain: "object" })

prin(get('desktop', 'areWindowsHidden'))

set('desktop', 'areWindowsHidden', true)

prin(get('desktop', 'areWindowsHidden'))


// Example usage:
const directoryPath = __dirname + '/exampleDir'; // Replace with your starting directory
const searchTerm = 'oldTerm';
const replacement = 'newTerm';

util.rebrand(directoryPath, searchTerm, replacement);
