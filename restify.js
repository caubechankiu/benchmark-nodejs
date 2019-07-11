'use strict';

const restify = require('restify');
const app = restify.createServer();

app.get('/', (req, res) => res.send('Hello world'));
app.listen(3000);
