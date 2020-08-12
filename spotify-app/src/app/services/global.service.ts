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
      'Authorization': 'Bearer BQAgJYUbKnSKbxv48JErqGVFQ6-BhFBLe3k8d81KHOj7QN2IcdzbW65XB4Vu2mm2U5_-CAooRtHn_g2ce10'
    });

    // execute request
    return this.http.get(url, { headers });
  }
}
