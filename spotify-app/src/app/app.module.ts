import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Routes
import { AppRoutingModule } from './app-routing.module';

// Components and Modules
import { AppComponent } from './app.component';
import { NavBarComponent } from './pages/shared/nav-bar/nav-bar.component';

// Services
import { GlobalService } from './services/global.service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    GlobalService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
