import { Injectable } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable() // service provided in Artist module
export class AlbumService {

  constructor(private globalService: GlobalService) { /*empty*/ }

  // get album info
  public getAlbum(albumId: string): Observable<any> {
    const albumUrl: string = `albums/${ albumId }`;

    return this.globalService.getQuery(albumUrl).pipe(
      map((res: any) => {
        if (!res) {
          throw new Error('Value expected!');
        } else {
          // TO-DO: tipar
          return res;
        }
      }),
      catchError((err) => {
        throw new Error(err.message);
      }));
  }
}
