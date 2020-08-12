import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes
import { AppRoutingModule } from './app-routing.module';

// Components and Modules
import { AppComponent } from './app.component';
import { NavBarComponent } from './pages/shared/nav-bar/nav-bar.component';
// import { LoadingComponent } from './pages/shared/loading/loading.component';

// Services
import { GlobalService } from './services/global.service';

// Pipes
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PipesModule,
  ],
  providers: [
    GlobalService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
