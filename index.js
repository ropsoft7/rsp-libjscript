function RSp() {};

rsp.prototype.
rsp.prototype.env = {};
rsp.prototype.util = {};

rsp.prototype.exec = function () {
    return shelljs.exec;
}

rsp.prototype.util.replacef = require('./util/replacef.js')
