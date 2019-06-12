using BooksApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BooksApp.Controllers
{
    public class BooksController : ApiController
    {
        Book[] Books = new Book[]
        {
           new Book { isbn = "978-85-508-0269-5", titulo = "Manual de DevOps", idioma = "Portugues", datapublicacao = "21/06/2018", numpaginas = 464, Price = 89,90 },
           new Book { isbn = "978-85-508-0189-6", titulo = "Projeto Fênix", idioma = "Portugues", Datapublicacao = "21/06/2018", numpaginas = 384, Price = 79,90 },
           new Book { isbn = "978-85-7608-213-2", titulo = "Use a Cabeça! JavaScript", idioma = "Portugues", Datapublicacao = "15/04/2008", numpaginas = 640, Price = 140,90 },
        };

        public IEnumerable<Book> GetAllBooks()
        {
            return books;
        }

        public IHttpActionResult GetBook(int id)
        {
            var book = books.FirstOrDefault((p) => p.Id == id);
            if (book == null)
            {
                return NotFound();
            }
            return Ok(book);
        }
    }
}
