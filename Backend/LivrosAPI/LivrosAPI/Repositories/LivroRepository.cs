using LivrosAPI.Data;
using LivrosAPI.Models;
using LivrosAPI.Repositories.IRepositories;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace LivrosAPI.Repositories
{
    public class LivroRepository : ILivroRepository
    {
        private readonly DataContext _context;

        public LivroRepository(DataContext context)
        {
            _context = context;
        }

        public async Task AdicionarLivroAsync(Livro livro)
        {
            livro.Id = Guid.NewGuid();
            _context.Add(livro);
            await _context.SaveChangesAsync();
        }

        public async Task AtualizarAsync(Livro livro)
        {
            _context.Update(livro);
            await _context.SaveChangesAsync();
        }

        public async Task<List<Livro>> BuscarAsync()
        {
            var livros = await _context.Livros.AsNoTracking().ToListAsync();

            return livros;
        }

        public Task<Livro> BuscarEspecificoAsync(Guid id)
        {
            var livro = _context.Livros.FirstOrDefaultAsync(x => x.Id == id);

            return livro;
        }

        public async Task DeletarAsync(Livro livro)
        {
            _context.Remove(livro);
            await _context.SaveChangesAsync();
        }
    }
}
