const os = require('os');

console.log('OS Platform: ',os.platform());
console.log('CPU architecture: ',os.platform());


console.log('Total Storage: ',os.totalmem(),'\nFree',os.freemem())
console.log('\nHome directory: ',os.homedir())
