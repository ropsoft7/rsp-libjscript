const fs = require('fs')
const path = require('path')

module.exports = () => {

    const rspStateFilePath = path.join(process.env.HOME, '.local', 'state', 'rsp.json')

    let rspState = null;

    try {
        rspState = require(rspStateFilePath);
    } catch (err) {
        rspState = 'error'
    }

    if (rspState === 'error') {

        let state = require(__dirname + "/rspStateEschema.js")
        
        const jsonStateObject = JSON.stringify(state)
    
        console.debug('state', state)
        console.debug('jsonStateObject', jsonStateObject)
    
        fs.writeFileSync(rspStateFilePath, jsonStateObject)

        rspState = fs.readFileSync(rspStateFilePath);
        rspState = JSON.parse(rspState)

    }

    return rspState;
}