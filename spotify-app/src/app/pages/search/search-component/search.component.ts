import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

// Services
import { SearchService } from '../services/search.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  // TO-DO: tipar
  public artistsList: any[] = [];
  public tracksList: any[] = [];

  constructor(private searchService: SearchService, private location: Location) { /*empty*/ }

  ngOnInit(): void { /*empty*/ }

  // search both artist and track
  public search(term: string): void {
    console.log('Term to find:', term);

    this.searchService.getTracksAndArtists(term).subscribe((data: any) => {
      this.artistsList = data.artists.items;
      this.tracksList = data.tracks.items;

      // ordenar por popularidad
      console.log('Data:', data);
      console.log('Artists List:', this.artistsList);
      console.log('Tracks List:', this.tracksList);

    }, (err) => {
      console.log('Error:', err);
      console.error(err.message);
    }, () => {
      console.log('Complete!');
    });
  }

  // go back to previous url
  public goBack(): void {
    this.location.back();
  }

}
