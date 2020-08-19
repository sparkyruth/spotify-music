import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// Modules and Component
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home-component/home.component';
import { NewReleaseItemComponent } from './new-release-item/new-release-item.component';

// Services
import { NewReleasesService } from './services/new-releases.service';
import { PipesModule } from 'src/app/pipes/pipes.module';


@NgModule({
  declarations: [
    HomeComponent,
    NewReleaseItemComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
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
    NewReleasesService
  ]
})
export class HomeModule { }
