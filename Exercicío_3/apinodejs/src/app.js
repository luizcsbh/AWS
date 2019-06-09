
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const router = express.Router();
//Rotas
const index = require('./routes/index');
const personRouter = require('./routes/personRouter');
const produtoRouter = require ('./routes/produtoRouter');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', index);
app.use('/person', personRouter);
app.use('/produto', produtoRouter);

module.exports = app;
