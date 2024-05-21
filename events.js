// Fullstack JavaScript QAP1
// Author: Joseph Flores
// May 22, 2024

// EVENTS
// Node.js has a built-in module, called "Events", where you can create-, fire-, and listen for- your own events.

// Import the events module
var events = require("events");
// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler using myEventHandler function
var myEventHandler = function () {
  // This will be executed when the event is fired
  // For QAP1, it is expected that this will display the message "This will display when we fire the eventsample!"
  console.log("This will display when we fire the eventsample!");
  console.log("This is the end of the program.");
};

// Assign the event handler to "eventsample"
eventEmitter.on("eventsample", myEventHandler);

// Fire the "eventsample" event
eventEmitter.emit("eventsample");
