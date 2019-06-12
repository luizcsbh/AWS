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
           new Book { Isbn = "978-85-508-0269-5", Titulo = "Manual de DevOps", Idioma = "Portugues", DataPublicacao = "21/06/2018", NumPaginas = 464, Price = 89,90 },
           new Book { Isbn = "978-85-508-0189-6", Titulo = "Projeto Fênix", Idioma = "Portugues", DataPublicacao = "21/06/2018", NumPaginas = 384, Price = 79,90 },
           new Book { Isbn = "978-85-7608-213-2", Titulo = "Use a Cabeça! JavaScript", Idioma = "Portugues", DataPublicacao = "15/04/2008", NumPaginas = 640, Price = 140,90 },
        };

        public IEnumerable<Book> GetAllBooks()
        {
            return books;
        }

        public IHttpActionResult GetBook(int id)
        {
            var book = books.FirstOrDefault((p) => p.Isbn == isbn);
            if (book == null)
            {
                return NotFound();
            }
            return Ok(book);
        }
    }
}
