import { LivroService } from './../../servicos/livro.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LivroDTO } from 'src/app/DTO/livroDTO.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livros-cadastro',
  templateUrl: './livros-cadastro.component.html',
  styleUrls: ['./livros-cadastro.component.scss'],
})
export class LivrosCadastroComponent implements OnInit {
  public livroFormularioCadastro: FormGroup;

  constructor(
    private livroService: LivroService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.livroFormularioCadastro = this.formBuilder.group({
      titulo: [null, [Validators.required, Validators.maxLength(100)]],
      subtitulo: [null, [Validators.maxLength(100)]],
      resumo: [null, [Validators.maxLength(500)]],
      quantidadePaginas: [null, [Validators.required, Validators.max(10000)]],
      dataPublicacao: [null, [Validators.required]],
      editora: [null, [Validators.required, Validators.maxLength(150)]],
      edicao: [null, [Validators.maxLength(2), Validators.min(1), Validators.max(20)]],
      autor: [null, [Validators.required, Validators.maxLength(50)]],
    });
  }

  ngOnInit(): void {}

  cadastrarLivro(): void {
    const dadosFormulario = this.livroFormularioCadastro.value;
    let livroDTO: LivroDTO = {
      titulo: dadosFormulario.titulo,
      subtitulo: dadosFormulario.subtitulo,
      resumo: dadosFormulario.resumo,
      quantidadePaginas: dadosFormulario.quantidadePaginas,
      dataPublicacao: dadosFormulario.dataPublicacao,
      editora: dadosFormulario.editora,
      edicao: dadosFormulario.edicao,
      autor: dadosFormulario.autor,
    };
    this.livroService.cadastrar(livroDTO).subscribe(() => {
      this.router.navigate(['livros/listagem']);
    });
  }

  cancelar(): void {
    this.router.navigate(['livros/listagem']);
  }
}
