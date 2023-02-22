import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LivroService } from './../../servicos/livro.service';
import { Component, OnInit } from '@angular/core';
import { LivroDTO } from 'src/app/DTO/livroDTO.model';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

@Component({
  selector: 'app-livros-crud',
  templateUrl: './livros-crud.component.html',
  styleUrls: ['./livros-crud.component.scss'],
})
export class LivrosCrudComponent implements OnInit {
  public livrosDTO: LivroDTO[] = [];
  public id: string = '';
  public page: number = 1;
  public pageSize: number = 5;
  public filtro: any = {
    titulo: '',
    autor: '',
    editora: '',
  };
  public filtragem!: string;
  public closeResult: any = '';
  public livroFormularioDetalhes: FormGroup;

  constructor(
    private livroService: LivroService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
  ) {
    this.livroFormularioDetalhes = this.formBuilder.group({
      id: [this.id, [Validators.required]],
      titulo: [null, [Validators.required]],
      subtitulo: [null],
      resumo: [null],
      quantidadePaginas: [null, [Validators.required]],
      dataPublicacao: [null, [Validators.required]],
      editora: [null, [Validators.required]],
      edicao: [null],
      autor: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.livroService.lerTodos().subscribe((livrosDTO) => {
      this.livrosDTO = livrosDTO;
      console.log(this.livrosDTO);
    });
  }

  deletar(livroDTO: LivroDTO): void {
    const id = livroDTO.id?.toString()!;
    this.livroService.deletar(id).subscribe(() => {
      this.livroService.lerTodos().subscribe((livrosDTO) => {
        this.livrosDTO = livrosDTO;
      });
    });
  }

  filtroSelecionado(value: string): void {
    this.filtragem = value;
  }

  detalhar(livroDTO: LivroDTO): void {
    this.livroService.lerPorId(livroDTO.id?.toString()!).subscribe((livroDTO) => {
      this.livroFormularioDetalhes.patchValue(livroDTO);
      this.livroFormularioDetalhes.disable();
      this.livroFormularioDetalhes
        .get('dataPublicacao')!
        .patchValue(moment(livroDTO.dataPublicacao).format('YYYY-MM-DD'));
    });
  }

  open(content: any): void {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
