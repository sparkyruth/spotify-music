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
}
