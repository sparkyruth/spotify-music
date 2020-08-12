import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistComponent } from './artist-component/artist.component';

// Services
import { ArtistService } from './services/artist.service';
import { ArtistTopTrackComponent } from './artist-top-track/artist-top-track.component';


@NgModule({
  declarations: [
    ArtistComponent,
    ArtistTopTrackComponent
  ],
  imports: [
    CommonModule,
    ArtistRoutingModule
  ],
  providers: [
    ArtistService,
  ]
})
export class ArtistModule { }
