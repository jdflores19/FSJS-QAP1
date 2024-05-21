// Fullstack JavaScript QAP1
// Author: Joseph Flores
// May 22, 2024

// FILE SYSTEM
// Node.js includes a module called "File System" to work with the file system on your computer.
// Common use for the File System module includes creating, reading, updating, and deleting files.

// Example using writeFile() method

// Import the fs module
const fs = require("fs");

// Create a file named "sample.txt" and add content to it
fs.writeFile(
  "sample.txt",
  "This is the sample text we need to add to the created file.",
  (err) => {
    // If there is an error, log it to the console
    if (err) {
      console.error("Error creating the file:", err);
      return;
    }
    // If there is no error, log a success message to the console
    console.log("Successfulyl created sample.txt!");
    console.log("This will be saved in the current directory.");
  }
);

// We can also use the following code to create a file named "sample.txt" and add content to it.
// This code is more readable and easier to understand as it separates the file path and content into separate variables.

// const fs = require("fs");

// const filePath = "sample.txt";
// const content = "This is the sample text we need to add to the created file.";

// fs.writeFile(filePath, content, (err) => {
//   if (err) {
//     console.error("Error creating the file:", err);
//     return;
//   }
//   console.log("Successfulyl created sample.txt!");
//   console.log("This will be saved in the current directory.");
// });
