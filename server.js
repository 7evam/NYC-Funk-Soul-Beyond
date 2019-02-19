const express = require('express');
const logger         = require('morgan');
const app = express();

app.use(logger('dev'));
app.use(express.static('public'));

let port = 3000

console.log('server works')

server.listen(port)
