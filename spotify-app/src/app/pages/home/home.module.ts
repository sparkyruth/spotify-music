import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    PipesModule
  ],
  providers: [
    NewReleasesService
  ]
})
export class HomeModule { }
