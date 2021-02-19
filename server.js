const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3001);
app.use(express.json()); // Enable JSON body to be parsed

let users = []; // This is your fake database

app.get('/', (request, response) => {
  response.status(200).json({hello: 'world'});
});

app.listen(app.get('port'), () => {
  console.log(`Auth0 practice BE running on http://localhost:${app.get('port')}`);
});
