import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-artist-item',
  templateUrl: './search-artist-item.component.html',
  styleUrls: ['./search-artist-item.component.scss']
})
export class SearchArtistItemComponent implements OnInit {
  @Input() artist: any;

  constructor() { /*empty*/ }

  ngOnInit(): void { /*empty*/ }

}
