const express = require('express');
const http = require('http');
const app = express();


app.get('/dashboard', (req, res) => {
  res.status(200).sendFile(__dirname + '/index.html') //thanks
})

app.listen(50451, () => {
  console.info('we good fam')
})