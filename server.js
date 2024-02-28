//first step: Require Express
const express = require('express');

const app = express();
const PORT = 3000;


//Custom Middlewares cause its important!!
module.exports = (req, res, next) => {
  console.log('Please chack your connection');
  next();
};

//custom middleware 2
module.exports = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
};


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
