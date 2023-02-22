export interface LivroDTO {
  id?: string;
  titulo: string;
  subtitulo: string;
  resumo: string;
  quantidadePaginas: number;
  dataPublicacao: Date;
  edicao: number;
  editora: string;
  autor: string;
}
