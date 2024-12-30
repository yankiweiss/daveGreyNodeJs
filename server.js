console.log('Hello World');

const math = require('./math')
console.log(math.add(5,6))

const os = require('os');
const path = require('path')

console.log(os.type());

console.log(__dirname);
console.log(__filename);
console.log(path.dirname(__filename))