import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';  
import { conferencia } from './conferencia';

@Injectable({
  providedIn: 'root'
})
export class conferenciaService {
  private apiUrl: string = environment.baseURL + 'CAMBIAR';


constructor(private http: HttpClient) { }

getconferencias(): Observable<conferencia[]> {
  return this.http.get<conferencia[]>(this.apiUrl);

}

}
