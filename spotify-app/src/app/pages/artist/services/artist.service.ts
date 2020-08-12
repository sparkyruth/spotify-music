import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// Services
import { GlobalService } from 'src/app/services/global.service';

@Injectable() // service provided in Artist module
export class ArtistService {

  constructor(private globalService: GlobalService) { /*empty*/ }

  // get artist info
  public getArtist(artistId: string): Observable<any> {
    const artistUrl: string = `artists/${ artistId }`;

    return this.globalService.getQuery(artistUrl).pipe(
      map((res: any) => {
        if (!res) {
          throw new Error('Value expected!');
        } else {
          // TO-DO: tipar
          console.log('res:', res);
          return res;
        }
      }),
      catchError((err) => {
        throw new Error(err.message);
      }));
  }
}
