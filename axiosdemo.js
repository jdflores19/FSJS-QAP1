// Fullstack JavaScript QAP1
// Author: Joseph Flores
// May 22, 2024

// AXIOS MODULE: HTTP REQUESTS
// Axios is a popular promise-based HTTP client for the browser and Node.js. It is used to make HTTP requests from Node.js and supports all modern browsers.
// As per geeksforgeeks.org, Axios simplifies the process of sending asynchronous requests and handling responses.

// Import the axios module
const axios = require("axios");

// Import the events module
const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

// Define a simple event handler function
const fetchData = async () => {
  try {
    // Use axios to make a GET request to a public API
    // Let's fetch user data from the JSONPlaceholder API
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users/8"
    );
    // Log the response data to the console
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Assign the event handler to an event called 'fetchData'
eventEmitter.on("fetchData", fetchData);

// Emit the event
eventEmitter.emit("fetchData");
