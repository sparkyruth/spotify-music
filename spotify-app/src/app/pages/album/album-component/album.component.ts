import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// Services
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  public albumId: string = '';
  public album: any | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private albumService: AlbumService,
    private location: Location,
    ) { /*empty*/ }

  ngOnInit(): void {
    this.getActivatedRoute();
    this.getAlbum();
  }

  // get album id from active route
  public getActivatedRoute(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.albumId = params.id;
      console.log('Activated Route Id', params.id);
    });
  }

  public getAlbum(): void {
    this.albumService.getAlbum(this.albumId).subscribe((album: any) => {
      this.album = album;
      console.log('Album Data:', album);
    }, (err) => {
      console.log('Album Error:', err);
      console.error(err.message);
    }, () => {
      console.log('Album Complete!');
    });
  }

  // go back to the previous URL
  public goBack(): void {
    this.location.back();
  }

}
