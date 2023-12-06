const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('I want to make 110K + this year!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
