const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    //if url is '/' then send a response of a form with a button 
    if(url === '/'){
        res.write('<html>');
        res.write('<head> <title>My First Node Form</title> </head>');
        //action is the url the request should automatically sent to 
        res.write('<body> <form action="/message" method="POST"> <input type="text" name="message"> <button type="submit">Send </button></form> </body>');
        res.write('</html>');
        //ensure no more code is read after the end by adding return
        return res.end();
    };  
    //if the url matches the form's action and is a post request type
    //redirect use back to '/' and create a new file with the user input
    if(url ==='/message' && method ==='POST'){
        //request body to be read from data 'chunk' obj
        const body = [];
        //event listener for data from the user ie message
        req.on('data', (chunk) =>{
            //view chunk object
            console.log(chunk)
            //push chunk data into local const body
            body.push(chunk);
        });
        //request listner for when its done parsing incoming data
        //return to stop from reading later code
        return req.on('end', () =>{
            //create a new buffer and add all the chunks from inside my body to it
            //toString only works because we expect a text file
            const parsedBody =Buffer.concat(body).toString();
            // console.log(parsedBody);
            //const of user input value
            const message = parsedBody.split('=')[1];
            //write a new file to environment named message that contains user input
            //writeFileSync blocks code execution until operation is done
            fs.writeFile('message.txt', message, (err) =>{
                //error handling done here
                //set status to 302 or redirect
                res.statusCode = 302;
                //writeHead- writes metadata in one go
                res.setHeader('Location', '/');
                return res.end();
            });
        });
        
        
    };  
    //set accecpted header types ie tells browser what it is 
    res.setHeader('Content-Type', 'text/html');

    //send html response
    res.write('<html>');
    res.write('<head> <title>My First Page </title> </head>');
    res.write('<body> <h1>I created this page using nodejs sent from a server i created too!!</h1> </body>');
    res.write('</html>');
    res.end();
};
// export handler
module.exports = {
    handler: requestHandler,
    someText: "hey hey"
};
//  module.exports = requestHandler
//exports.handler = requestHandler
 