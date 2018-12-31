'use strict';

const express = require('express');
const routes = require('./routes/api.js');

const app = express();

app.get('/', (req, res) => {
  res
    .status(200)
    .send('Hello, world!')
    .end();
});

app.use('/api', routes);
// To save lines, can also do 
// app.use('/api, require('./routes/api.js')) 

// For some reason, at least in nodejs10, you have to do caps "PORT"
app.listen(process.env.PORT || 4000, function(){
  console.log('now listening for requests on localhost:4000');
});
