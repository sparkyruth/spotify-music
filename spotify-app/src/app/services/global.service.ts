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
      'Authorization': 'Bearer BQCJ_ZRUgmYpCC6TtkBa_bkjfnawiQeDIBPND0bGxibC4Lr15xwowuPJDBWOj6MPatq-d7MUArJ2pDD_HJY'
    });

    // execute request
    return this.http.get(url, { headers });
  }
}
