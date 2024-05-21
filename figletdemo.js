// Fullstack JavaScript QAP1
// Author: Joseph Flores
// May 22, 2024

// FIGLET MODULE: ASCII ART
// The figlet module is a simple way to create ASCII art from text. It is useful for creating text-based logos or other text-based art.
// The figlet module is available on npm and can be installed using the following command: npm install figlet

// Decided to use the figlet module to create ASCII art from text, since it is a simple and easy-to-use module that can create text-based art from any text input.
// This is before we dive into the more complex and advanced topics of the course.
// Please note that aside from text-based art, the figlet module can also be used to create text-based logos, banners, and other text-based designs.

// Import the figlet module
const figlet = require("figlet");

// Import the events module
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

// Define a simple event handler function
const myEventHandler = () => {
  // Use figlet to create ASCII art from text
  figlet("Have fun coding!", (err, data) => {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    // Log the ASCII art text to the console
    console.log(data);
  });
};

// Assign the event handler to an event called 'createArt'
eventEmitter.on("createArt", myEventHandler);

// Emit the event
eventEmitter.emit("createArt");
