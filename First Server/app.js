//import http module to create a server
const http = require('http');

//function that executes for every incoming request
//takes two arguments request:IncomingMessage & response:ServerResponse
// request-  object that allows for reading data
// response - object used to return responses
// function rqListener (request, response) {
    
// };

//routes all request to given function
// http.createServer(rqListener);

//anon function that does the same as above
// returns a server
const server = http.createServer((req, reqs) => {
    console.log(req);
});

//keeps server running to listen to request
//takes port & host name
server.listen(3000);