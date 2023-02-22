import { environment } from './../../environments/environment';
import { LivroDTO } from './../DTO/livroDTO.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LivroService {
  constructor(private http: HttpClient) {}

  lerTodos(): Observable<LivroDTO[]> {
    return this.http.get<LivroDTO[]>(environment.livrosAPIUrl);
  }

  lerPorId(id: string): Observable<LivroDTO> {
    const url = `${environment.livrosAPIUrl}/${id}`;
    return this.http.get<LivroDTO>(url);
  }

  cadastrar(livroDTO: LivroDTO): Observable<LivroDTO> {
    return this.http.post<LivroDTO>(environment.livrosAPIUrl, livroDTO);
  }

  atualizar(livroDTO: LivroDTO): Observable<LivroDTO> {
    const url = `${environment.livrosAPIUrl}/${livroDTO.id}`;
    return this.http.put<LivroDTO>(url, livroDTO);
  }

  deletar(id: string): Observable<LivroDTO> {
    const url = `${environment.livrosAPIUrl}/${id}`;
    return this.http.delete<LivroDTO>(url);
  }
}
