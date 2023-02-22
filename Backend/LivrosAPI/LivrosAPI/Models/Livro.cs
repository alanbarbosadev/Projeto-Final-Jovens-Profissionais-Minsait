namespace LivrosAPI.Models
{
    public class Livro
    {
        public Guid Id { get; set; }
        public string Titulo { get; set; }
        public string ?Subtitulo { get; set; }
        public string ?Resumo { get; set; }
        public int QuantidadePaginas { get; set; }
        public DateTime DataPublicacao { get; set; }
        public string Editora { get; set; }
        public int ?Edicao { get; set; }
        public string Autor { get; set; }
    }
}
