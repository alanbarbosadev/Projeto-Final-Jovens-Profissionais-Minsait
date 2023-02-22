using LivrosAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace LivrosAPI.Mapping
{
    public class LivroMapping : IEntityTypeConfiguration<Livro>
    {
        public void Configure(EntityTypeBuilder<Livro> builder)
        {
            builder.ToTable("Livros");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Titulo)
                .HasColumnType("varchar(100)")
                .IsRequired();

            builder.Property(x => x.Subtitulo)
                .HasColumnType("varchar(100)");

            builder.Property(x => x.Resumo)
                .HasColumnType("varchar(500)");

            builder.Property(x => x.QuantidadePaginas)
                .HasColumnType("numeric(5,0)")
                .IsRequired();

            builder.Property(x => x.DataPublicacao)
                .HasColumnType("datetime")
                .IsRequired();

            builder.Property(x => x.Editora)
                .HasColumnType("varchar(150)")
                .IsRequired();

            builder.Property(x => x.Edicao)
                .HasColumnType("numeric(2,0)");

            builder.Property(x => x.Autor)
                .HasColumnType("varchar(50)")
                .IsRequired();
        }
    }
}
