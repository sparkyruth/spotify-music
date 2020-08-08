import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home-component/home.component';
import { NewReleaseItemComponent } from './new-release-item/new-release-item.component';

import { NewReleasesService } from './services/new-releases.service';


@NgModule({
  declarations: [
    HomeComponent,
    NewReleaseItemComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: [
    NewReleasesService
  ]
})
export class HomeModule { }
