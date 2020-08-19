import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistRoutingModule } from './artist-routing.module';

//Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
    ArtistService,
  ]
})
export class ArtistModule { }
