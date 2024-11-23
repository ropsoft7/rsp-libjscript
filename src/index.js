const set = require('./set.js');
const get = require('./get.js');
const exec = require('./exec.js');
const prin = require('./prin.js');
const prompt = require('./prompt.js');
const util = require('./util/index.js');

function RSp() {
    this.initialize();
};

RSp.prototype.initialize = function () {
    this.env = {};
};

RSp.prototype.prompt = prompt;
RSp.prototype.prin = prin;
RSp.prototype.exec = exec;
RSp.prototype.util = util;
RSp.prototype.set = set;
RSp.prototype.get = get;

module.exports = RSp;