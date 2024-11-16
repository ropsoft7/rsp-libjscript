const exec = require('./exec.js');
const util = require('./util/index.js');
const envSet = require('./envSet.js');
const envGet = require('./envGet.js');

function RSp() {
    this.initialize();
};

RSp.prototype.initialize = function () {
    console.log('Initializing RSp Lib.js API instance...');
    this.env = {};
};

RSp.prototype.exec = exec;
RSp.prototype.util = util;
RSp.prototype.envSet = envSet;
RSp.prototype.envGet = envGet;

module.exports = RSp;