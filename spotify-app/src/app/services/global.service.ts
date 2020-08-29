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
      'Authorization': 'Bearer BQD6RuT1ZWqwsLzaW8ojp6uml-noIvxpN3gzx-MHfFRRHFwUHRqFpo6n_57baUUYmWRme73sY3kvQrIYtdE'
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
