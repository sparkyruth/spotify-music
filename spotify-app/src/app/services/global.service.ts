import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable() // provide service in module
export class GlobalService {
  constructor(private http: HttpClient) { /*empty*/ }

  public getQuery(query: string) {
    // define common url
    const url: string = `https://api.spotify.com/v1/${query}`;

    // define header to specify token
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDuUkXCUwN4-vbweDOuP2eu7e5aeBmw57td8ZXre0zv0o3zX24qCAPjS9TUEockx55tkAvGxwhSwE0fzUc'
    });

    // execute request
    return this.http.get(url, { headers });
  }
}
