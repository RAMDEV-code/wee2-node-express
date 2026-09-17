/*
  NOTE:
  I’m had issues with my .env/environment variable setup,
  so I brought the PORT value back into the server directly. 
  So as to meet the assignment submission deadline.
*/

// require("dotenv").config();
// const dotenv = require('dotenv');
// dotenv.config();

const express = require('express');
const app = express();
PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("My Week 2 API!!");
});

app.post('/user', (req, res) => {
  const {name, email} = req.body;
  if (!name || !email) return res.status(400).json({error: `Missing fields`});
  res.status(201).json({message: `Hello, ${name}`});
});

app.get("/user/:id", (req, res) => {
  const id = req.params.id
  res.status(201).json({id: req.params.id, message: "Sample User"});
  console.log(id)
});



// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`API live on port ${PORT}`);
// });

app.listen(PORT, () => {
  console.log(`API live on port ${PORT}`);
});