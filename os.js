// Fullstack JavaScript QAP1
// Author: Joseph Flores
// May 22, 2024

// OS
// The OS module provides operating system-related utility methods and properties.
// It can be used to get information about the operating system, such as platform, architecture, memory, CPU, and more.

// Import the os module
var os = require("os");
// Display operating system information
console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());
console.log("Hostname: " + os.hostname());
console.log("Total Memory: " + os.totalmem() + " bytes");
console.log("Free Memory: " + os.freemem() + " bytes");
console.log("Home Directory: " + os.homedir());
console.log("Temp Directory: " + os.tmpdir());
console.log("CPU Core Count: " + os.cpus().length);
console.log("CPU Model: " + os.cpus()[0].model);
console.log("CPU Speed: " + os.cpus()[0].speed + " MHz");
// Additional information, to demo branching
console.log("CPU Times: " + os.cpus()[0].times);
console.log("Network Interfaces: " + os.networkInterfaces());
console.log("Endianness: " + os.endianness());
console.log("Load Average: " + os.loadavg());
