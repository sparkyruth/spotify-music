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
      'Authorization': 'Bearer BQCLPtLYUB3eXKzlakBFuPaskit_4-pWJs_ObZbMnA1RN6Cz4kwOU6gXIj3p1vuTiS76PjZ3YR5Mt4r9TlE'
    });

    // execute request
    return this.http.get(url, { headers });
  }
}
