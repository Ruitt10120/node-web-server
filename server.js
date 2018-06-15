const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');

app.use(express.static(__dirname + "/public"));

app.get('/', (request, response) => {
		response.render('welcome.hbs', {
		title: "Very cool",
		text: "Hello!"
		});
		//response.send("<h1>Hello from express!</h1><p>welcome</p>");
});

app.get('/about', (request, response) => {
		response.send("<h1>About this page</h1><p>very cool</p>" 
		/*{
		name: 'álvaro',
		likes: ['reading', 'playing', 'hiking']
		}*/
		);
});

app.get('/carochao', (request, response) => {
		var date = new Date().toString();
		response.send(`<h1>Current time</h1><p>${date}</p>`);
});

app.listen(3000);