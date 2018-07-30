'use strict';

// Load array of notes

console.log('Hello Noteful!');

// INSERT EXPRESS APP CODE HERE...

const express = require('express');

const data = require('./db/notes');

const app = express();

// ADD STATIC SERVER HERE
app.use(express.static('public'));

app.get('/api/notes', (req, res) => {
  res.json(data);
});

app.get('/api/notes/:id',(req,res) => {
	const id = req.params.id;
	res.json(data.find(item => item.id === Number(id)));
});

app.listen(8006, function () {
  console.info(`Server listening on ${this.address().port}`);
}).on('error', err => {
  console.error(err);
});
