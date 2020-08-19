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
      'Authorization': 'Bearer BQDMNbhBSVXvOiBM17FcnoTsls1qLcr4rqb9nDhtNVqECnHihq8ZyRTtGeY8-SnLqQzvrjD9PT9p5x0-e4s'
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
