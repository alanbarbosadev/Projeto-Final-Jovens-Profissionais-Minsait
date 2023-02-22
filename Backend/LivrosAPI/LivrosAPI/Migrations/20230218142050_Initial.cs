using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LivrosAPI.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Livros",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Titulo = table.Column<string>(type: "varchar(100)", nullable: false),
                    Subtitulo = table.Column<string>(type: "varchar(100)", nullable: true),
                    Resumo = table.Column<string>(type: "varchar(500)", nullable: true),
                    QuantidadePaginas = table.Column<decimal>(type: "numeric(5,0)", nullable: false),
                    DataPublicacao = table.Column<DateTime>(type: "datetime", nullable: false),
                    Editora = table.Column<string>(type: "varchar(150)", nullable: false),
                    Edicao = table.Column<decimal>(type: "numeric(2,0)", nullable: true),
                    Autor = table.Column<string>(type: "varchar(50)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Livros", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Livros");
        }
    }
}
