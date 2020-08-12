import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';

// Components
import { SearchComponent } from './search-component/search.component';
import { SearchArtistItemComponent } from './search-artist-item/search-artist-item.component';
import { SearchTrackItemComponent } from './search-track-item/search-track-item.component';

// Services
import { SearchService } from './services/search.service';

// Pipes
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    SearchComponent,
    SearchArtistItemComponent,
    SearchTrackItemComponent,
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    PipesModule,
  ],
  providers: [
    SearchService,
  ]
})
export class SearchModule { }
