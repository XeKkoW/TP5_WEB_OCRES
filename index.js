const express = require('express');

const hostname = 'loacalhost'
const port = 3000;

const app = express();

app.listen(port, hostname, () => {
	console.log(`Mon serveur fonctionne sur http://${hostname}:${port}\n`);
});

app.get('/test', (req, res) => {
	res.json({
		req: req.method,
		data: "This is a GET"
	})
});

app.put('/test', (req, res) => {
	res.json({
		req: req.method,
		data: "This is a PUT"
	});
});

app.listen(port, hostname, () => {
	console.log('App listening on port 3000!')
});

var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});

module.exports = router

let users = [{
	user: "Arthur",
	id: "0"
}];

router.get('/', (req, res) => {
	res.status(200).json({ users })
});