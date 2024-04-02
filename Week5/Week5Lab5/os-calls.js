
const os = require('os');
const fs = require ('fs')
const hostname = os.hostname();
const platform = os.platform();
const cpus = os.cpus();

console.log('Hostname:',os.hostname)
console.log('fs.writeFile(./hostname.txt)')

console.log('Hostname:', os.hostname )
console.log('Plateform Name:', os.platform )
console.log('Availabe CPU :', os.cpus )
// Writing the information to a file
const fileInfo = `
Hostname: ${hostname}
Platform: ${platform}
CPU Cores: ${cpus.length}
`;

fs.writeFile('os_info.txt', fileInfo, (err) => {
    if (err) {
    console.error('Error writing file:', err);
    } else {
    console.log('Data written to os_info.txt');
    }
    });