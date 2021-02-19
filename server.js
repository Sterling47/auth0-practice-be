const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3001);
app.use(express.json()); // Enable JSON body to be parsed

let users = [
  {
		name: 'Silly Bird',
		email: 'example@example.com',
		avatarUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/silly-bird-ernie-echols.jpg'
	}
]; // This is your fake database

app.get('/', (request, response) => {
  response.status(200).json({hello: 'world'});
});

// Your new endpoints (routes) can go here **************




// ******************************************************

app.listen(app.get('port'), () => {
  console.log(`Auth0 practice BE running on http://localhost:${app.get('port')}`);
});
