import { Component, OnInit } from '@angular/core';

// Services
import { SearchService } from '../services/search.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public artistsList: any[] = [];

  constructor(private searchService: SearchService) { /*empty*/ }

  ngOnInit(): void { /*empty*/ }

  public search(term: string): void {
    // search both artist and track
    this.searchService.getTracksAndArtists(term).subscribe((data: any) => {
      console.log('Data:', data);
    }, (err) => {
      console.log('Error:', err);
      console.error(err.message);
    }, () => {
      console.log('Complete!');
    });
  }

}
