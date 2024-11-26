const fs = require('fs')
const path = require('path')

const set = require('./set.js');
const get = require('./get.js');
const exec = require('./exec.js');
const prin = require('./prin.js');
const debug = require('./debug.js');
const prompt = require('./prompt.js');
const util = require('./util/index.js');

function RSp() {
    this.initialize();
};

RSp.prototype.initialize = function () {
    
};

RSp.prototype.prompt = prompt;
RSp.prototype.prin = prin;
RSp.prototype.debug = debug;
RSp.prototype.exec = exec;
RSp.prototype.util = util;
RSp.prototype.set = set;
RSp.prototype.get = get;

module.exports = RSp;