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
      'Authorization': 'Bearer BQAa8HxKlfRK5SolQ0ZYpKLG5O_lRnzb5yR-9tBEYfhB-Si28vRd9s9rK2mJZEHib65CJSssr3SWzyUfl9o'
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
