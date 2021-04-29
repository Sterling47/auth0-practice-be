const express = require('express');
var cors = require('cors');
const app = express();

app.set('port', process.env.PORT || 3001);
app.use(express.json()); // Enable JSON body to be parsed

app.use(cors()); // Allow all CORS requests

let users = []; // This is your fake database

app.get('/', (request, response) => {
  response.status(200).json({hello: 'world'});
});

// Your new endpoints (routes) can go here **************




// ******************************************************

app.listen(app.get('port'), () => {
  console.log(`Auth0 practice BE running on http://localhost:${app.get('port')}`);
});
