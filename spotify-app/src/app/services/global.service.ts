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
      'Authorization': 'Bearer BQCXFvGaLuFJ4PWBo2JtZC7M4A-6GAaheRjx5KHrQ3EL-TlNSvbupraQE3iNC5uwV9-f6wCE_3hscH45NLk'
    });

    // execute request
    return this.http.get(url, { headers });
  }
}
