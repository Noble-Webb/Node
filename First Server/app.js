//import http as http constant
const http = require('http');

//import routes
const routes = require('./routes');

//anon server function that takes request and response as arguments saved as a const
const server = http.createServer(routes.handler);

//Event Loop - keeps server running to listen to request
//takes port & host name
server.listen(3000);