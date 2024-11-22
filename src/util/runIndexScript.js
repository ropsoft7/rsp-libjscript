const fs = require('fs');
const numeral = require('numeral');

const exec = require('../exec.js'),
        print = require('../print.js');

module.exports = (scriptdir) => {
    
    print('Running indexed Scripts on directory: ' + scriptdir)
    
    fs.readdirSync(scriptdir).filter(file => {
        return numeral(file[0]).value() || numeral(file[0]).value() === 0;
    }).forEach(file => {
        exec(`yes | ${scriptdir}/${file}`)
    })
}