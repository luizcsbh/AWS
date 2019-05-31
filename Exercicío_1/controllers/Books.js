'use strict';

var utils = require('../utils/writer.js');
var Books = require('../service/BooksService');

module.exports.addLivros = function addLivros (req, res, next) {
  var itemInventario = req.swagger.params['ItemInventario'].value;
  Books.addLivros(itemInventario)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletePet = function deletePet (req, res, next) {
  var isbn = req.swagger.params['isbn'].value;
  var chave = req.swagger.params['chave'].value;
  Books.deletePet(isbn,chave)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getBookByIsbn = function getBookByIsbn (req, res, next) {
  var isbn = req.swagger.params['isbn'].value;
  Books.getBookByIsbn(isbn)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateBook = function updateBook (req, res, next) {
  var corpo = req.swagger.params['Corpo'].value;
  Books.updateBook(corpo)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateBookWithForm = function updateBookWithForm (req, res, next) {
  var isbn = req.swagger.params['isbn'].value;
  var título = req.swagger.params['Título'].value;
  var idioma = req.swagger.params['idioma'].value;
  Books.updateBookWithForm(isbn,título,idioma)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
