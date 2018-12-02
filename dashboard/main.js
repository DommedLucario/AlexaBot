const express = require('express');
const path = require('path');

const app = express();
app.use('/api/discord', require('./api/discord'));

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'index.html'));
});
// no? IT WORKED, DONT EDIT.
app.listen(50451, () => {
  console.info('Running on port 50451');
});