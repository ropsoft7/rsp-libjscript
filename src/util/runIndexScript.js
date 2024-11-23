const fs = require('fs');
const numeral = require('numeral');

const exec = require('../exec.js'),
      prin = require('../prin.js');

module.exports = (scriptdir) => {

    prin('Running indexed Scripts on directory: ' + scriptdir)

    fs.readdirSync(scriptdir).filter(file => {
        return numeral(file[0]).value() || numeral(file[0]).value() === 0;
    }).forEach(file => {

        prin(`Executing: ${scriptdir}/${file}`)

        exec(`yes | ${scriptdir}/${file}`)
    })
}
