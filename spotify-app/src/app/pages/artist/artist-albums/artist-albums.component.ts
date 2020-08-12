import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artist-albums',
  templateUrl: './artist-albums.component.html',
  styleUrls: ['./artist-albums.component.scss']
})
export class ArtistAlbumsComponent implements OnInit {
  @Input() album: any | null = null;

  constructor() { /*empty*/ }

  ngOnInit(): void { /*empty*/ }

}
