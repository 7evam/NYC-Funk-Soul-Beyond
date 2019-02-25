const express = require('express');
const logger         = require('morgan');
const app = express();
const reactViews     = require('express-react-views');
const path           = require('path');

app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());
app.set('views', path.join(__dirname, './src/components'));

app.use(logger('dev'));

const port = 3000

console.log('server works')

app.get('/', (req, res) => {
   res.render('navbar')
 });

app.listen(port)
