#!/usr/bin/env node


var express = require('express');
var app = express();
var webhook = require('express-ifttt-webhook');

app.use(webhook(function(json, done) {
	console.log('webhook> ', json);
	done(null);
}));

app.get('/', (req, res) => res.send('Hello World!'))

var port = 3000;

app.listen(port, '127.0.0.1', () => { 
	console.log(`Example app listening at http://localhost:${port}`)
});




