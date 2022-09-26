//import http module to create a server
const { read } = require('fs');
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
const server = http.createServer((req, res) => {
    //important information in the request
    console.log(req.url, req.method, req.headers);
    //how to exit server
    // process.exit();

    //set accecpted header types ie tells browser what it is 
    res.setHeader('Content-Type', 'text/html');
    //send html response
    res.write('<html>');
    res.write('<head> <title>My First Page </title> </head>');
    res.write('<body> <h1>I created this page using nodejs sent from a server i created too!!</h1> </body>');
    res.write('</html>');
    res.end();
});

//Event Loop - keeps server running to listen to request
//takes port & host name
server.listen(3000);