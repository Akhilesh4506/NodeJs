const express=require('express');
const routes = express.Router();

//define a route handler for the HTTP GET request method 
routes.get('/home',(req, res) => {
    res.send("Welcome to home page!");
})

routes.get('/test',(req, res) => {
    res.send("You are doing great!");
})

//exports the routes module so that it can be used in other parts of the application. 
module.exports = routes;