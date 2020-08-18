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
      'Authorization': 'Bearer BQDAV38ASeUUlmv5tR5DRDldYIpu3iU_JaSKB4nZ1jOYcrXQpdLchV8MWfVGzTQZIyK-Ui-zEGWvOIRRFQs'
    });

    // execute request
    return this.http.get(url, { headers });
  }
}
