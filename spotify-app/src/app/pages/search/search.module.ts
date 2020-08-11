import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search-component/search.component';
import { SearchService } from './services/search.service';
import { SearchArtistItemComponent } from './search-artist-item/search-artist-item.component';


@NgModule({
  declarations: [
    SearchComponent,
    SearchArtistItemComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule
  ],
  providers: [
    SearchService,
  ]
})
export class SearchModule { }
