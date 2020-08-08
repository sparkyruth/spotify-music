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
      'Authorization': 'Bearer BQA9Dgb7mVO_eEaTSW0vHqOICbfNltYXi0RwCyi_h8tqeW102rkJgnsCu1nMxQ3Xxvo0ic5cqTeO1ygfvDQ'
    });

    // execute request
    return this.http.get(url, { headers });
  }
}
