/**
 * Logs the key-value pairs of a given object for debugging, 
 * handling dynamic runtime variables such as functions, undefined, etc.
 * @param {Object} obj - The object to debug.
 */
function debugRuntimeObject(obj) {
    if (typeof obj !== 'object' || obj === null) {
      console.error('Provided input is not a valid object:', obj);
      return;
    }
  
    console.log('   → Debugging Runtime Variables: \n');
    Object.entries(obj).forEach(([key, value]) => {
      let type = typeof value;
      let displayValue;
  
      switch (type) {
        case 'function':
          displayValue = `[Function: ${value.name || 'anonymous'}]`;
          break;
        case 'undefined':
          displayValue = 'undefined';
          break;
        case 'object':
          displayValue = value === null ? 'null' : JSON.stringify(value, null, 2);
          break;
        default:
          displayValue = value;
      }
  
      console.log(`     • ${key}: ${displayValue} → ${type}`);

    });
    console.log('');
  }
  
  // Example Usage:
  const runtimeVariables = {
    counter: 42,
    toggle: true,
    config: {
      retries: 3,
      timeout: 5000
    },
    logMessage: function () {
      console.log('This is a log message.');
    },
    undefinedVar: undefined,
    nullVar: null,
  };
  
  module.exports = debugRuntimeObject
  