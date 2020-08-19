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
      'Authorization': 'Bearer BQC6RyGSl1BEGblLNpJu5ZUWUQOYgQCTl13U2FZ2Ic9pdroHKocC3dfplmJnzcUxSk84ejT9z1hgmaM9U3o'
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
