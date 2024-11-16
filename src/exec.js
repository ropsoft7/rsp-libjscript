
// usage example:
// const exec = require('./exec.js');
// exec('echo Hello World"')
// const qtermBinPath = exec('$(whereis qterminal)').value

const shelljs = require('shelljs');

module.exports = (cmd) => {
    
    // Envolve o comando em aspas duplas para garantir que ele seja tratado como uma string única.
    let result = shelljs.exec(cmd, { shell: '/usr/bin/bash', silent: false });

    return {
        value: result.stdout,
        error: result.stderr
    };
};
