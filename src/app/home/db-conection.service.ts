import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbConectionService {
  
  constructor(public http: HttpClient) { }

  public getMovies(): Observable<any> {
    return this.http.get<any>('https://api.themoviedb.org/3/movie/popular?api_key=bc59e0b10da954ced9231d5e387024fe&language=en-US');
  }

  public getMovie(id: Number): Observable<any> {
    return this.http.get<any>('https://api.themoviedb.org/3/movie/'+ id +'?api_key=bc59e0b10da954ced9231d5e387024fe&language=en-US');
  }
}
