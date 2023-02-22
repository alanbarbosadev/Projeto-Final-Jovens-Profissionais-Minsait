﻿// <auto-generated />
using System;
using LivrosAPI.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace LivrosAPI.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("LivrosAPI.Models.Livro", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Autor")
                        .IsRequired()
                        .HasColumnType("varchar(50)");

                    b.Property<DateTime>("DataPublicacao")
                        .HasColumnType("datetime");

                    b.Property<decimal?>("Edicao")
                        .HasColumnType("numeric(2,0)");

                    b.Property<string>("Editora")
                        .IsRequired()
                        .HasColumnType("varchar(150)");

                    b.Property<decimal>("QuantidadePaginas")
                        .HasColumnType("numeric(5,0)");

                    b.Property<string>("Resumo")
                        .HasColumnType("varchar(500)");

                    b.Property<string>("Subtitulo")
                        .HasColumnType("varchar(100)");

                    b.Property<string>("Titulo")
                        .IsRequired()
                        .HasColumnType("varchar(100)");

                    b.HasKey("Id");

                    b.ToTable("Livros", (string)null);
                });
#pragma warning restore 612, 618
        }
    }
}
