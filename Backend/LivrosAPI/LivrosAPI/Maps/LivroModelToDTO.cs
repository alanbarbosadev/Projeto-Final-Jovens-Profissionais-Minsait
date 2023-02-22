using AutoMapper;
using LivrosAPI.DTO;
using LivrosAPI.Models;

namespace LivrosAPI.Maps
{
    public class LivroModelToDTO : Profile
    {
        public LivroModelToDTO()
        {
            CreateMap<Livro, LivroDTO>();
        }      
    }
}
