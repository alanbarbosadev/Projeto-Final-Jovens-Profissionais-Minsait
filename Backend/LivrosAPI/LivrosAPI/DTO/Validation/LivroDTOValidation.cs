using FluentValidation;

namespace LivrosAPI.DTO.Validation
{
    public class LivroDTOValidation : AbstractValidator<LivroDTO>
    {
        public LivroDTOValidation()
        {
            RuleFor(x => x.Titulo).NotEmpty().NotNull().MaximumLength(100).WithMessage("Campo obrigatório!");
            RuleFor(x => x.Subtitulo).MaximumLength(100);
            RuleFor(x => x.Resumo).MaximumLength(500);
            RuleFor(x => x.QuantidadePaginas).NotEmpty().NotNull().InclusiveBetween(1, 10000).WithMessage("Campo obrigatório!");
            RuleFor(x => x.DataPublicacao).NotEmpty().NotNull().WithMessage("Campo obrigatório!");
            RuleFor(x => x.Editora).NotEmpty().NotNull().MaximumLength(150).WithMessage("Campo obrigatório!");
            RuleFor(x => x.Edicao).InclusiveBetween(1, 20);
            RuleFor(x => x.Autor).NotEmpty().NotNull().MaximumLength(50).WithMessage("Campo obrigatório!");
        }
    }
}
