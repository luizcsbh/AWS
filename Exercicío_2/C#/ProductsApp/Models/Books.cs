using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BooksApp.Models
{
    public class Book
    {
        public string isbn { get; set; }
        public string titulo { get; set; }
        public string idioma { get; set; }
        public DateTime datapublicacao { get; set; }
        public integer numpaginas { get; set; }
        public decimal price { get; set; }
        
    }
}