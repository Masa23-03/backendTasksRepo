import http from 'node:http';

//create server
const server=http.createServer((req , res)=>{
    
//GET / → return a JSON response like { message: "Welcome to the server" }
if(req.method === 'GET'&&req.url==='/'){

//Set appropriate response headers (e.g., Content-Type: application/json)
res.writeHead(200, {'Content-Type' : 'application/json'});

res.end(JSON.stringify({message: 'Welcome to the server'}));

}


//GET /about → return a JSON response like { message: "This is the about route" }
else if(req.method==='GET' &&req.url === '/about'){

//Set appropriate response headers (e.g., Content-Type: application/json)
res.writeHead(200, {'Content-Type' : 'application/json'});

res.end(JSON.stringify({message: 'This is the about route'}));

}
//Handle any unknown route with a 404 response: { error: "Route not found" }
else{
    res.writeHead(404, {'Content-Type' : 'application/json'});
    res.end(JSON.stringify({error: 'Route not found'}));


}

});





//The server should listen on port 3000.
server.listen(3000, ()=>{ 
    console.log('server is running on port 3000');

});
