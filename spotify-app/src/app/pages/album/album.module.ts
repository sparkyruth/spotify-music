import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumComponent } from './album-component/album.component';
import { AlbumService } from './services/album.service';
import { UriSecurityPipe } from './pipes/uri-security.pipe';

@NgModule({
  declarations: [
    AlbumComponent,
    UriSecurityPipe
  ],
  imports: [
    CommonModule,
    AlbumRoutingModule
  ], 
  providers: [
    AlbumService,
  ]
})
export class AlbumModule { }
