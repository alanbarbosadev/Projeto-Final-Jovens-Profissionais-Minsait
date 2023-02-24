using AutoMapper;
using LivrosAPI.DTO;
using LivrosAPI.Models;

namespace LivrosAPI.Maps
{
    public class LivroModelToLivroDTO : Profile
    {
        public LivroModelToLivroDTO()
        {
            CreateMap<Livro, LivroDTO>();
        }      
    }
}
