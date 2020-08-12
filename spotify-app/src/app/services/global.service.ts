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
      'Authorization': 'Bearer BQBT1vunhlN-1D_TCzHMTQMnYe24O5kUqEHCDq6X2DTYG-2895wV31nRZ7rjhAUXWpa4DQwM85EcH0m46CY'
    });

    // execute request
    return this.http.get(url, { headers });
  }
}
