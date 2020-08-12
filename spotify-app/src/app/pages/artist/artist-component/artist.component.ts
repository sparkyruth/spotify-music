import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistService } from '../services/artist.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  public artistId: string = '';
  public artist: any;

  constructor(private activatedRoute: ActivatedRoute, private artistService: ArtistService) { /*empty*/ }

  ngOnInit(): void {
    this.getActivatedRoute();
    this.getArtist();
  }

  // get artist id from active route
  public getActivatedRoute(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.artistId = params.id;
      console.log('Activated Route Id', params.id);
    });
  }

  // get artist
  public getArtist(): void {
    this.artistService.getArtist(this.artistId).subscribe((artista: any) => {
      console.log('Artist Data:', artista);
    }, (err) => {
      console.log('Artist Error:', err);
      console.error(err.message);
    }, () => {
      console.log('Artist Complete!');
    });
  }
}
