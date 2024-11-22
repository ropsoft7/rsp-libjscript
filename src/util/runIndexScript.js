const fs = require('fs');
const numeral = require('numeral');

const exec = require('../exec.js');

module.exports = (scriptdir) => {
    fs.readdirSync(scriptdir).filter(file => {
        return numeral(file[0]).value() || numeral(file[0]).value() === 0;
    }).forEach(file => {
        exec(`yes | ${scriptdir}/${file}`)
    })
}