import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';

//Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// Components
import { SearchComponent } from './search-component/search.component';
import { SearchArtistItemComponent } from './search-artist-item/search-artist-item.component';
import { SearchTrackItemComponent } from './search-track-item/search-track-item.component';
import { SearchModalComponent } from './search-modal/search-modal.component';

// Services
import { SearchService } from './services/search.service';

// Pipes
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    SearchComponent,
    SearchArtistItemComponent,
    SearchTrackItemComponent,
    SearchModalComponent,
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    PipesModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    })
  ],
  providers: [
    SearchService,
  ]
})
export class SearchModule { }
