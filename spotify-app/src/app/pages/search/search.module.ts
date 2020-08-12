import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';

// Components
import { SearchComponent } from './search-component/search.component';
import { SearchArtistItemComponent } from './search-artist-item/search-artist-item.component';
import { SearchTrackItemComponent } from './search-track-item/search-track-item.component';

// Services
import { SearchService } from './services/search.service';
import { NoImagePipe } from './pipe/no-image.pipe';


// Pipes
// import { NoImagePipe } from '../../pipes/no-image.pipe';

@NgModule({
  declarations: [
    SearchComponent,
    SearchArtistItemComponent,
    NoImagePipe,
    SearchTrackItemComponent,
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
  ],
  providers: [
    SearchService,
  ]
})
export class SearchModule { }
