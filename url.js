// Fullstack JavaScript QAP1
// Author: Joseph Flores
// May 22, 2024

// URL
// Node.js has a built-in module called "URL" which splits up a web address into readable parts and allows the user to parse and format URLs.

// Example using the url.parse() method

// Import the url module
var url = require("url");
// Parse an address with the url.parse() method, and return the URL object
var adr =
  "https://www.youtube.com/results?search_query=coldplay+yellow&artist=Coldplay";
var q = url.parse(adr, true);

// The parse method returns an object containing url properties
console.log("The host is: " + q.host);

// The query property returns an object with all the querystring parameters as properties
var qdata = q.query;

// Display what's inside the qdata object
console.log(qdata);
// To specify a query parameter, use the dot notation. The following displays the value of parameters "search_query" and "artist"
console.log("The value of search query parameter: " + qdata.search_query);
console.log("The value of artist parameter: " + qdata.artist);
