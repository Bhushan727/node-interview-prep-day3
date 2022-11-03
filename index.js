
// Q1. How do you create a simple Express.js application?
// Q2. Implementation of all type of exports in backend application
// Q3. Create a middleware which will be applicable to all the routes
// Q4.  Implement CORS.


const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors());

const middleware = (req,res,next) => {
    console.log('middleware requested');
    next();
}

app.get('/api',middleware,(req,res)=>{
    console.log('in Api');
    res.send('Api authorised')
})

app.get('/',(req,res) => {
    res.send('Hello World')
    console.log('homepage');
})

app.listen('9900',()=>{
    console.log('server Started');
})
