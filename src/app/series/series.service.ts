import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Serie } from './serie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

private apiUrl: string = environment.baseUrl ;

constructor(private http: HttpClient) { }

getBooks(): Observable<Serie[]> {
  return this.http.get<Serie[]>(this.apiUrl);

}



}
