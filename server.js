//first step: Require Express
const express = require('express');
const users = require('./data/users');
const posts = require('./data/posts');
const comments = require('./data/comments');


const app = express();
const PORT = 3000;


//Custom Middleware cause its important!!
app.use((req, res) => {
  res.status(404);
  res.json({ error: "Resource Not Found" });
});

app.use((req, res) => {
  res.status(500);
  res.json({ error: "Resource Not Found" });
});


//function to hande errors
app.use((req, res, next) => {
  res.status(404).send("Sorry, can't find that!");
});


//creating a route
app.get('/', (req, res) => {
  res.send('Express Application in the process');
});



// Listen to express on a certain port
const port = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});


//I will put comments between them 
