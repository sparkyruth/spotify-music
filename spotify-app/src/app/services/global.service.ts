import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// Models
import { APINewReleases, NewReleasesItem, FormattedNewReleases } from '../models/new-releases-model';

@Injectable()
export class GlobalService {
  private newReleasesUrl: string = 'https://api.spotify.com/v1/browse/new-releases';

  constructor(private http: HttpClient) { /*empty*/ }

  public getNewReleases(): Observable<FormattedNewReleases[]> {
    // define header to specify token
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCiSazJtavFxgIQi8Xj3bC4-kvfTv5_B66ixtjURSSfb2cljt5DNGsv5Rk14R5IVA5LS32Txw_9oGb6eAM'
    });

    // execute request
    return this.http.get(this.newReleasesUrl, { headers }).pipe(
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
