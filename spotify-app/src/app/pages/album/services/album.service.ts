import { Injectable } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { Observable } from 'rxjs';

@Injectable() // service provided in Artist module
export class AlbumService {

  constructor(private globalService: GlobalService) { /*empty*/ }

  // get album info
  public getAlbum(albumId: string): Observable<any> {
    const albumUrl: string = `albums/${ albumId }`;
    return this.globalService.getQuery(albumUrl);
  }
}
