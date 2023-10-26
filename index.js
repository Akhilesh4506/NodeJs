// imports the Express.js framework, which is a popular Node.js 
//web application framework used to create web servers and define routes.
const express=require('express')

//imports a module 'routes'. Used for defining the routes and handling for your application.
const routes=require('./routes')

//This instance, 'app', is use to define routes, middleware, and configure web server.
const app=express();

//set up the application to use the routes defined in the 'routes' module 
//for any requests that match the root path ('/'). 
app.use('/',routes);

//starts the Express server and tells it to listen on port 3000. When the server starts, 
app.listen(3000,()=>{
    console.log("Server running on port 3000");
});


