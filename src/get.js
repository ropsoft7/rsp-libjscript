const fs = require('fs')
const path = require('path')

module.exports = function (context, key) {

    // console.warn('Under development...')
    const stateObject = require(__dirname + '/helper/createStateObjectIfNeed.js')()

    console.debug('stateObject', stateObject)

    const contextStateObject = stateObject[context]

    console.debug('contextStateObject', contextStateObject)

    return contextStateObject[key]
}