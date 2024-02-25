//first step: Require Express
const express = require('express');
const users = require('./data/users');
const posts = require('./data/posts');

const app = express();
const PORT = 3000;


//Middleware-------------------------------------------------



//Routes-----------------------------------------------------
app.get('/', (req, res) => {
  res.send('Express Application in the process');
});



// Listen to express on a certain port-----------------------
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});


//comments should go in between them 
