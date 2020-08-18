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
      'Authorization': 'Bearer BQAl5MM3BzR5XbEdqxEtrzqhi8ErU_bHTbpE_GT8pXdXO56mEFFco2BlOVF8FLHKh22eKeQmO8TnoKZLr70'
    });

    // execute request
    return this.http.get(url, { headers });
  }
}
