//import http as http constant
const http = require('http');
//anon server function that takes request and response as arguments saved as a const
const server = http.createServer((req, res) =>{
    // parse url
    const url = req.url;
    //if url is '/' then send a response of a form with a button 
    if(url === '/'){
        res.write('<html>');
        res.write('<head> <title>My First Node Form</title> </head>');
        //action is the url the request should automatically sent to 
        res.write('<body> <form action="/message method="POST"> <input type="text" name="message"> <button type="submit">Send </button></form> </body>');
        res.write('</html>');
        //ensure no more code is read after the end by adding return
        return res.end();
    };    
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