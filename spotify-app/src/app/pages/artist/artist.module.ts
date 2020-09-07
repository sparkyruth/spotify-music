import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Translation
import { HttpClientModule } from '@angular/common/http';

// Modules and Components
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistComponent } from './artist-component/artist.component';
import { ArtistTopTrackComponent } from './artist-top-track/artist-top-track.component';
import { ArtistAlbumsComponent } from './artist-albums/artist-albums.component';
import { SharedTranslate } from '../shared/translate/sharedTranslate.module';

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
    HttpClientModule,
    SharedTranslate
  ],
  providers: [
    ArtistService,
  ]
})
export class ArtistModule { }
