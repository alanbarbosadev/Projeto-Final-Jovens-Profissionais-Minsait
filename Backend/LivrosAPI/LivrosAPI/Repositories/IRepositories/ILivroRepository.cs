using LivrosAPI.Models;
using System.Linq.Expressions;

namespace LivrosAPI.Repositories.IRepositories
{
    public interface ILivroRepository
    {
        Task<List<Livro>> BuscarAsync();
        Task<Livro> BuscarEspecificoAsync(Guid id);
        Task AdicionarLivroAsync(Livro livro);
        Task AtualizarAsync(Livro livro);
        Task DeletarAsync(Livro livro);
    }
}
