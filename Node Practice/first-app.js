//import node's file search and save it to a const
const fs = require('fs');
//use import to create a (text) file with specified content 
//use *node first-app.js* to run the app
fs.writeFileSync('hello.txt', 'Hello from Node.js');

// console.log('Hi there from Node.js');
