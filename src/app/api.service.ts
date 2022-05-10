import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Imagem } from './image';


const API = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  create(img:any) {
    /* console.log(img) */
    return this.http.post(`${API}receita`, img, {reportProgress: true, observe:'events'});
  }

  getAll(): Observable<Imagem[]> {
    return this.http.get<Imagem[]>(`${API}receita`);
  }
}
