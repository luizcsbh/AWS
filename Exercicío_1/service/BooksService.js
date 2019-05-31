'use strict';


/**
 * Adicionar um livro na livraria
 * Adicionar um livro sistema
 *
 * itemInventario Book Adicionando item
 * no response value expected for this operation
 **/
exports.addLivros = function(itemInventario) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Apagar um Livro
 *
 * isbn String Livro apagado
 * chave String  (optional)
 * no response value expected for this operation
 **/
exports.deletePet = function(isbn,chave) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Encontrar um livro pelo ISBN
 * Retorna um único livro
 *
 * isbn String Informa ISBN do livro
 * returns Book
 **/
exports.getBookByIsbn = function(isbn) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "numpaginas" : 320,
  "isbn" : "8576089343",
  "título" : "Introdução a ciência de dados",
  "idioma" : "Português",
  "datapublicacao" : "20-06-2016",
  "editora" : {
    "editoraid" : 0,
    "name" : "Alta Books",
    "authors" : {
      "nome" : "Fenando Amaral",
      "authorid" : 6
    }
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualização de um livro existente
 *
 * corpo Book Objeto livros precisa ser adicionado na Livraria
 * no response value expected for this operation
 **/
exports.updateBook = function(corpo) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Atualiza um livro da Livraria com os dados do formulário
 *
 * isbn String ISBN do Livro que precisa ser atualizado
 * título String Atualização do Título do Livro (optional)
 * idioma String Atualização do Idioma do Livro (optional)
 * no response value expected for this operation
 **/
exports.updateBookWithForm = function(isbn,título,idioma) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

