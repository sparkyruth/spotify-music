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
      'Authorization': 'Bearer BQD5F_QlHGnc2Z8-bTaNemcxo44pBNf0dPfHphJIEh5Jw3GUAJy2gMCD-h44h83oX_AQ96IhcnvG3QdwFmQ'
    });

    // execute request
    return this.http.get(url, { headers });
  }
}
