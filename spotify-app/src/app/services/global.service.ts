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
      'Authorization': 'Bearer BQBfniaB2leqdKGgIhvHg7lVDDKudh-8gyN4SFJfbhaSu5iEwhBsy0dTrj14lgTmjZY8SnIC-lONoAL-SwU'
    });

    // execute request
    return this.http.get(url, { headers });
  }
}
