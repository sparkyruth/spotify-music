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
      'Authorization': 'Bearer BQDdL2EsKcpDo7ZdUYw4cFfTeWANgv6cPBVfkVCudjQ7VGqeWHN9rO6Doy5sdf6UDq4-gZQa0hVzcGAHg9k'
    });

    // execute request
    return this.http.get(url, { headers });
  }
}
