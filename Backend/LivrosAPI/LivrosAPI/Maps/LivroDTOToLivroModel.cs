using AutoMapper;
using LivrosAPI.DTO;
using LivrosAPI.Models;

namespace LivrosAPI.Maps
{
    public class LivroDTOToLivroModel : Profile
    {
        public LivroDTOToLivroModel()
        {
            CreateMap<LivroDTO, Livro>();
        }
    }
}
