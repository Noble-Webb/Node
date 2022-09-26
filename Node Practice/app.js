//import http
const http = require('http');

//import routes
const routes = require('./routes');
//create server
const server = http.createServer(routes)

//have server listen on 3000
server.listen(3000)