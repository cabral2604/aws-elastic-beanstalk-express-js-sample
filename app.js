const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('La clinique Claudange sera pas ouverte entre 10-15h'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
