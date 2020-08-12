import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistRoutingModule } from './artist-routing.module';

// Modules
import { PipesModule } from 'src/app/pipes/pipes.module';

// Components
import { ArtistComponent } from './artist-component/artist.component';
import { ArtistTopTrackComponent } from './artist-top-track/artist-top-track.component';
import { ArtistAlbumsComponent } from './artist-albums/artist-albums.component';

// Services
import { ArtistService } from './services/artist.service';

@NgModule({
  declarations: [
    ArtistComponent,
    ArtistTopTrackComponent,
    ArtistAlbumsComponent
  ],
  imports: [
    CommonModule,
    ArtistRoutingModule,
    PipesModule,
  ],
  providers: [
    ArtistService,
  ]
})
export class ArtistModule { }
