import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artist-albums',
  templateUrl: './artist-albums.component.html',
  styleUrls: ['./artist-albums.component.scss']
})
export class ArtistAlbumsComponent implements OnInit {
  @Input() album: any;

  constructor() { /*empty*/ }

  ngOnInit(): void { /*empty*/ }

}
