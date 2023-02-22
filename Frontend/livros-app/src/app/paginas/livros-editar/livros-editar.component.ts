import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LivroService } from './../../servicos/livro.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { LivroDTO } from 'src/app/DTO/livroDTO.model';

@Component({
  selector: 'app-livros-editar',
  templateUrl: './livros-editar.component.html',
  styleUrls: ['./livros-editar.component.scss'],
})
export class LivrosEditarComponent implements OnInit {
  public id: string = this.route.snapshot.paramMap.get('id')!;
  public livroFormularioEditar: FormGroup;

  constructor(
    private livroService: LivroService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.livroFormularioEditar = this.formBuilder.group({
      id: [this.id, [Validators.required]],
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

  ngOnInit(): void {
    this.livroService.lerPorId(this.id).subscribe((livroDTO) => {
      this.livroFormularioEditar.patchValue(livroDTO);
      this.livroFormularioEditar
        .get('dataPublicacao')!
        .patchValue(moment(livroDTO.dataPublicacao).format('YYYY-MM-DD'));
    });
  }

  editarLivro(): void {
    const dadosFormulario = this.livroFormularioEditar.value;
    let livroDTO: LivroDTO = {
      id: this.id,
      titulo: dadosFormulario.titulo,
      subtitulo: dadosFormulario.subtitulo,
      resumo: dadosFormulario.resumo,
      quantidadePaginas: dadosFormulario.quantidadePaginas,
      dataPublicacao: dadosFormulario.dataPublicacao,
      editora: dadosFormulario.editora,
      edicao: dadosFormulario.edicao,
      autor: dadosFormulario.autor,
    };
    this.livroService.atualizar(livroDTO).subscribe(() => {
      this.router.navigate(['livros/listagem']);
    });
  }

  cancelar(): void {
    this.router.navigate(['livros/listagem']);
  }
}
