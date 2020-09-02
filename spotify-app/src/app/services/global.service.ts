import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable() // provide service in module
export class GlobalService {
  public activeLanguage: string = 'en';

  constructor(private http: HttpClient) { /*empty*/ }

  public getQuery(query: string) {
    // define common url
    const url: string = `https://api.spotify.com/v1/${query}`;

    // define header to specify token
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC3coeunNgzDFOo7ZxDz2oIn6eQq37q7DU62hxRMHZTfEaRQwYFcDGdKHhJ9tMGBGZUepnb9Zw02xIMLb8'
    });

    // execute request
    return this.http.get(url, { headers });
  }

  public setGlobalLanguage(language: string): void {
    this.activeLanguage = language;
  }

  public getGlobalLanguage(): string {
    return this.activeLanguage;
  }
}
