const fs = require('fs')
const path = require('path')

module.exports = function (context, key, newValue) {

    // console.warn('Under development...')
    const stateObject = require(__dirname + '/helper/createStateObjectIfNeed.js')()

    console.debug('stateObject', stateObject)

    const contextStateObject = stateObject[context]

    console.debug('contextStateObject', contextStateObject)

    // contextStateObject[key] = newValue;

    stateObject[context][key] = newValue

    //console.debug(typeof contextStateObject)

    fs.writeFileSync(path.join(process.env.HOME, '.local', 'state', 'rsp.json'), JSON.stringify(stateObject))
}