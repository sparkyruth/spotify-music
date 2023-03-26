import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable() // provide service in module
export class GlobalService {

  constructor(private http: HttpClient,private activeRoute: ActivatedRoute) { /*empty*/ }
  spotifyKey = "";
  public getQuery(query: string) {
    // define common url
    const url: string = `https://api.spotify.com/v1/${query}`;
    // this.spotifyKey = this.activeRoute.snapshot.fragment.split('&')[0].substr(13);
    // define header to specify token
    const headers = new HttpHeaders({
     //get access token from developer spotify account
      'Authorization':'Bearer BQAV0eJWpCIH7vHEAsLpFLMNa2O9MInIhLWfxVkDiH0-VqLfL_UaiK4ychAapPRvu1oWEhj5wmwP1fkrKyXArRhEPaXEfEsoljtk9ovwozTQwGfZ4RnkOBQjJSUUViMagF0A7CHr3V2R_xfX3Jik46EXFkbZSBRAbxXwk9wfIX8BrM5RcHJ4347kiv4dIcweeLZhuGF3kusQLZ_5ytXD_nOYfrtc-GtfQfPH6XOpy0yjSmXt_6iSG29LydZy8Z68x7gaQzWvuA0fXnv6mwSiviABJgIfTeafMLkEKRsIozLPSH_F4s0iATKm17mg4BRSQ0F65PZc91LR1P1zUg'

    });

    // execute request
    return this.http.get(url, { headers });
  }
}
