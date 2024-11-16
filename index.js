const express = require('express');
const fs = require('fs');
const app = express(); 
let users;
const PORT = 5000; 

fs.readFile("users.json","utf8", (err, data)=>{
    users = JSON.parse(data)
})

// This takes you the main route
app.get('/', (req, res) => {
    res.send('Welcome to My First Express Server! Add "/users" to retrieve user data.');
});


// To get all users
app.get('/users',(req,res)=>{
  res.status(200).send(users)
})

// Endpoint to get Users based on their ID
app.get('/users/:id',(req,res)=>{
  const users_array = Object.values(users)
  const found = users_array.find(user=> user.id === parseInt(req.params.id))
  if(!found){
      console.log("User not found")
      return res.status(404).send("User not found")
  }
  res.status(200).send(found)
})

// Endpoint to get user based on their profession
app.get('/users/profession/:profession',(req,res)=>{
  const users_array = Object.values(users)
  const found = users_array.find(user=> user.profession === req.params.profession)
  if(!found){
      console.log("User not found")
      return res.status(404).send("User not found")
  }
  res.status(200).send(found)
})

// Endpoint to get user based on their name
app.get('/users/name/:name',(req,res)=>{
  const users_array = Object.values(users)
  const found = users_array.find(user=> user.name === req.params.name)
  if(!found){
      console.log("User not found")
      return res.status(404).send("User not found")
  }
  res.status(200).send(found)
})


app.listen(PORT, () => console.log('Server is now running on port', PORT));
