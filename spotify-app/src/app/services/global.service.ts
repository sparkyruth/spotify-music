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
      'Authorization': 'Bearer BQCCYjn6sIO0BnwsviHAyrhCS_4EyLZ9VtdNlOcxwElJPNeOik4n9Ah86zFCX0MzYuYWm4xOAB1NA2GNYKo'
    });

    // execute request
    return this.http.get(url, { headers });
  }
}
