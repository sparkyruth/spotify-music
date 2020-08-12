import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Services
import { GlobalService } from 'src/app/services/global.service';

@Injectable() // service provided in Artist module
export class ArtistService {

  constructor(private globalService: GlobalService) { /*empty*/ }

  // get artist info
  public getArtist(artistId: string): Observable<any> {
    const artistUrl: string = `artists/${ artistId }`;
    return this.globalService.getQuery(artistUrl);
  }

  // get artist top tracks
  public getTopTracks(artistId: string): Observable<any> {
    const artistUrl: string = `artists/${ artistId }/top-tracks?country=us`;
    return this.globalService.getQuery(artistUrl).pipe(
      map((res: any) => {
        if (!res) {
          throw new Error('Value expected!');
        } else {
          // TO-DO: tipar
          return res['tracks'];
        }
      }),
      catchError((err) => {
        throw new Error(err.message);
      }));
  }

  // get artist top tracks
  public getAlbums(artistId: string): Observable<any> {
    const albumUrl: string = `artists/${ artistId }/albums`;
    return this.globalService.getQuery(albumUrl).pipe(
      map((res: any) => {
        if (!res) {
          throw new Error('Value expected!');
        } else {
          // TO-DO: tipar
          return res.items;
        }
      }),
      catchError((err) => {
        throw new Error(err.message);
      }));
  }
}
