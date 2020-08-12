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
      'Authorization': 'Bearer BQBLIGB2gRWYuCI5h9gdXWg-HPvQZ-N-mSbdjkww_OYyzz75hgjxkiQ-QdeXwp8ljXSytVNcLUZX-kCY6PI'
    });

    // execute request
    return this.http.get(url, { headers });
  }
}
