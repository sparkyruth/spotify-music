import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home-component/home.component';
import { NewReleaseItemComponent } from './new-release-item/new-release-item.component';

// Services
import { NewReleasesService } from './services/new-releases.service';

// Pipes
// import { NoImagePipe } from '../../pipes/no-image.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    NewReleaseItemComponent,
    // NoImagePipe,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    // NoImagePipe,
  ],
  providers: [
    NewReleasesService
  ]
})
export class HomeModule { }
