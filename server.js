const express = require('express');
var cors = require('cors');
const app = express();

app.set('port', process.env.PORT || 3001);
app.use(express.json()); // Enable JSON body to be parsed

app.use(cors()); // Allow all CORS requests

app.locals.users = []; // This is your fake database

app.get('/', (request, response) => {
  response.status(200).json({hello: 'world'});
});

// Your new endpoints (routes) can go here **************

app.get('/api/v1/users', (req, res)=> {
  const users = app.locals.users
  if (users.length === 0) {
      return res.status(501).send({message: "No user found"})
  }
  res.status(200).json(users)
})
app.post('/api/v1/users', (req,res) => {
  if (!req.body.name || !req.body.email) {
      res.status(400).send({message: "Fix your body"})
  }
  app.locals.users.push({...req.body, id:Date.now()})
  res.status(201).send(app.locals.users)
})

// ******************************************************

app.listen(app.get('port'), () => {
  console.log(`Getting money on http://localhost:${app.get('port')}`);
});
