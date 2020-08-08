import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// Models
import { FormattedNewReleases, APINewReleases } from 'src/app/models/new-releases-model';
// Services
import { GlobalService } from 'src/app/services/global.service';

@Injectable() // provide service in module
export class NewReleasesService {
  private newReleasesUrl: string = 'browse/new-releases';

  constructor(private globalService: GlobalService) { /*empty*/ }

  public getNewReleases(): Observable<FormattedNewReleases[]> {
    return this.globalService.getQuery(this.newReleasesUrl).pipe(
      map((res: APINewReleases) => {
        if (!res) {
          throw new Error('Value expected!');
        } else {
          const formattedItems: FormattedNewReleases[] = res.albums.items.map((
            { images, name, artists, type }) => (
            { images, name, artists, type }
            ));
          return formattedItems;
        }
      }),
      catchError((err) => {
        throw new Error(err.message);
      }));
  }
}
