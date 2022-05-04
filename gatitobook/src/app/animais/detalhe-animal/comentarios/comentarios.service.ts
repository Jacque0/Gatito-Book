import { Comentario, Comentarios } from './comentarios';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment.prod';
import { Injectable } from '@angular/core';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ComentariosService {
  constructor(private http: HttpClient) {}

  buscaComentario(id: number): Observable<Comentarios> {
    return this.http.get<Comentarios>(`${API}/photos/${id}/comments`);
  }

  incluiComentario(id: number, commentText: string): Observable<Comentario> {
    return this.http.post<Comentario>(`${API}/photos/${id}/comments`, {
      commentText,
    });
  }
}
