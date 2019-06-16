var express = require('express');
var bodyParser = require('body-parser');

var app = express();

const router = express.Router();

//Rotas
const index = require('./routers/index');
const personRouter = require('./routers/personRoute');


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', index);
app.use('/person', personRouter);


module.exports = app;
