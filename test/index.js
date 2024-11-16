const fs = require('fs');

const exec = require('../src/exec.js');
const util = require('../src/util/index.js');
// const envSet = require('../src/envSet.js');
// const envGet = require('../src/envGet.js');

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