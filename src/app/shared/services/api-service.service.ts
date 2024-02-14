import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private baseUrl = 'https://rickandmortyapi.com/api/';

  constructor(private http: HttpClient) { }

  getAllCharacters():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}character`)
  }

  changePage(page:number): Observable<any>{
    const newPage = this.http.get<any>(`${this.baseUrl}character/?page=${page}`);
    console.log(newPage)
    return newPage
  }

  getCharacterLocation(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/location/${id}`)
  }
}
