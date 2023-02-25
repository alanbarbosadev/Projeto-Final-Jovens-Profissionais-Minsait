using AutoMapper;
using LivrosAPI.Data;
using LivrosAPI.DTO;
using LivrosAPI.DTO.Validation;
using LivrosAPI.Models;
using LivrosAPI.Repositories.IRepositories;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LivrosAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("LivrosAPP")]
    public class LivroController : ControllerBase
    {
        private readonly ILivroRepository _repository;
        private readonly IMapper _mapper;

        public LivroController(ILivroRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("")]
        public async Task<ActionResult<List<LivroDTO>>> BuscarTodos()
        {
            var livros = await _repository.BuscarAsync();
            var livrosDTO = _mapper.Map<List<LivroDTO>>(livros);

            return Ok(livrosDTO);
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult<LivroDTO>> BuscarPorId(Guid id)
        {
            var livro = await _repository.BuscarEspecificoAsync(id);

            if (livro == null) return NotFound(new { message = "Nenhum livro foi encontrado!" });

            var livroDTO = _mapper.Map<LivroDTO>(livro);

            return Ok(livroDTO);
        }

        [HttpPost]
        [Route("")]
        public async Task<ActionResult<Livro>> CadastrarLivro([FromBody] LivroDTO livroDTO)
        {
            var validacao = new LivroDTOValidation().Validate(livroDTO);

            if (!validacao.IsValid) return BadRequest(new { message = "Dados inválidos!" });

            try
            {
                var livro = _mapper.Map<Livro>(livroDTO);
                await _repository.AdicionarLivroAsync(livro);

                return Ok(livro);
            }
            catch (Exception)
            {
                return BadRequest(new { message = "A operação falhou!" });
            }
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<ActionResult<Livro>> AtualizarLivro([FromBody] LivroDTO livroDTO, Guid id)
        {
            var validacao = new LivroDTOValidation().Validate(livroDTO);

            if (!validacao.IsValid) return BadRequest(new { message = "Dados inválidos!" });

            var livro = _mapper.Map<Livro>(livroDTO);

            if (id != livro.Id) return NotFound(new { message = "Livro não encontrado na base de dados" });

            try
            {
                await _repository.AtualizarAsync(livro);

                return Ok(livro);
            }
            catch (DbUpdateConcurrencyException)
            {
                return BadRequest(new { message = "O livro já foi atualizado!" });
            }
            catch (Exception)
            {
                return BadRequest(new { message = "A operação falhou!" });
            }
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<ActionResult<Livro>> DeletarLivro(Guid id)
        {
            var livro = await _repository.BuscarEspecificoAsync(id);

            if (livro == null) return NotFound(new { message = "Livro não encontrado na base de dados!" });

            try
            {
                await _repository.DeletarAsync(livro);

                return Ok(livro);
            }
            catch (Exception)
            {
                return BadRequest(new { message = "A operação falhou!" });
            }
        }

    }
}
